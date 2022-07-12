import React from "react";
import ItemListElement from "../item-list-element/item-list-element";

import './itemList.css';

const ItemList = ({todos, onToggleDone, onDelete, onToggleImp}) => {

    const item = todos.map((item) => {

        const {id, ...otherProps} = item;

        return(
            <li className="list-group-item"
                key={id}>
                    <ItemListElement
                        {...otherProps}
                        onToggleDone={() => onToggleDone(id)}
                        onDelete={() => onDelete(id)}
                        onToggleImp={() => onToggleImp(id)} />
            </li>
        )
    })

    return(
        <ul className="item-list list-group">
            {item}
        </ul>
    )
}
export default ItemList;