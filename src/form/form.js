import React, { Component } from "react";

import './form.css';

export default class Form extends Component {

    state = {
        label: ''
    }

    onChangeLabel = (e) => {
        this.setState({
            label: e.target.value 
        })
    }

    onAddItem = (e) => {
        e.preventDefault();

        if(this.state.label === ''){
            return
        }
        this.props.addItem(this.state.label)
        this.setState({
            label: ''
        })
    }

    render(){
        return(
            <form className="form"
                onClick={this.onAddItem}>
                <input className="form-inp"
                value={this.state.label}
                        onChange={this.onChangeLabel} />
                <button className="btn btn-outline-secondary" >Add Elem</button>
            </form>
        )
    }
}