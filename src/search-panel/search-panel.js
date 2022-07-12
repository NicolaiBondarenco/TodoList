import React, { Component } from "react";

import './search-panel.css';

export default class SearchPanel extends Component{

    state = {
        term: ''
    }

    onChangeTerm = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onToggleTerm(term)
    }

    render(){
        return(
            <input type="text"
                    className="search-panel"
                    value={this.state.term}
                    onChange={this.onChangeTerm}/>
        )
    }
}