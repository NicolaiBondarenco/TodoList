import React, { Component } from "react";

import './app.css';

import Header from "../header/header";
import SearchPanel from "../search-panel/search-panel";
import ItemList from "../item-list/itemList";
import Form from "../form/form";
import Filter from "../filter/filter";

export default class App extends Component {

    maxId = 10;

    state = {
        todoData : [
            this.createItem('Drink'),
            this.createItem('Lunch'),
            this.createItem('Create App')
        ],
        term: '',
        filter: 'active'
    }

    createItem(label){
        return{
            label,
            done: false,
            important: false,
            id: this.maxId++
        }
    }

    onDelete = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldArr = todoData;
            const newArr = [
                ...oldArr.slice(0, idx),
                ...oldArr.slice(idx + 1)
            ]
            return{
                todoData: newArr
            }
        })
    }

    onToggleImp = (id) => {
        this.setState(({todoData}) => {
            return{
                todoData: this.onToggle(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return{
                todoData: this.onToggle(todoData, id, 'done')
            }
        })
    }

    onToggle = (arr, id, item) => {
        const idx = arr.findIndex(el => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [item]: !oldItem[item]
        }
        const oldArr = arr;
        return [
            ...oldArr.slice(0, idx),
            newItem,
            ...oldArr.slice(idx + 1)
        ]
    }

    addItem = (text) => {
        this.setState(({todoData}) => {
            const oldArr = todoData;
            const newArr = [
                ...oldArr,
                this.createItem(text)
            ]
            return{
                todoData: newArr
            }
        })
    }

    caseCounter(arr){
        return arr.filter((el) => el.done).length
    }

    search(term, arr){
        return arr.filter(el => el.label.toLowerCase().indexOf(term.toLowerCase()) > -1)
    }

    onToggleTerm = (term) => {
        this.setState({term})
    }

    filter(items, filter){
        if(filter === ''){
            return items
        }

        if(filter === 'all'){
            return items
        } else if (filter === 'active'){
            return items.filter(el => !el.done)
        } else if (filter === 'done'){
            return items.filter( el => el.done)
        } else if (filter === 'important'){
            return items.filter( el => el.important)
        }
    }

    onChangeFilter = (filter) => {
        this.setState({filter})
    }

    render(){

        const {todoData, term, filter} = this.state;

        const done = this.caseCounter(todoData);
        const more = todoData.length - done;

        const visibleItem = this.filter(this.search(term, todoData), filter);

        return(
            <div className="app">
                <Header more={more} done={done} />
                <div className="d-flex">
                    <SearchPanel onToggleTerm={this.onToggleTerm} />
                    <Filter onChangeFilter={this.onChangeFilter} />
                </div>
                <ItemList todos={visibleItem}
                            onToggleDone={this.onToggleDone}
                            onDelete={this.onDelete}
                            onToggleImp={this.onToggleImp} />
                <Form addItem={this.addItem} />
            </div>
        )
    }
}