import React from 'react'
import './ItemListContainer.scss'
import {ItemCountComponent} from '../components/ItemCount.jsx'

export function ItemListContainer({ greeting}) {
    return (
        <div>
            <h2> {greeting} </h2>
            <ItemCountComponent stock={5} initial={2}/>
        </div>
    )
}