import React from "react";

import './item-list-element.css';

const ItemListElement = ({label, done, onToggleDone, onDelete, onToggleImp, important}) => {

    let style = 'item-list-element';
    if(done){
        style += ' done'
    }
    if(important){
        style += ' important'
    }

    return(
        <span className={style} >
            <span 
                className="item-list-element-label"
                onClick={() => onToggleDone()} >{label}</span>
            <span>
                <button className="btn btn-warning" onClick={() => onToggleImp()} > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                    </svg> 
                </button>
                <button className="btn btn-danger" onClick={() => onDelete()} > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                    </svg> 
                </button>
            </span>
        </span>
    )
}
export default ItemListElement;