import React from "react";

import './header.css';

const Header = ({more, done}) => {
    return(
        <div className="header">
            <h2>Todo List!!!</h2>
            <h6>more {more}, done {done}</h6>
        </div>
    )
}

export default Header;