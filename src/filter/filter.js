import React, { Component } from "react";

import './filter.css';

export default class Filter extends Component{

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
        {name: 'important', label: 'Imp'}
    ]

    render(){

        const button = this.buttons.map(({name, label}) => {
            return <button className="btn btn-outline-secondary" 
                            key={name}
                            onClick={() => this.props.onChangeFilter(name)} > {label} </button>
        })

        return(
            <div className="filter btn-group">
                {button}
            </div>
        )
    }
}

{/* <button className="btn btn-outline-secondary">All</button>
                <button className="btn btn-outline-secondary">Active</button>
                <button className="btn btn-secondary">Done</button> */}