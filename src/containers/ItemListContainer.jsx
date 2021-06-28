import React from 'react'
import './ItemListContainer.scss'

export function ItemListContainer({ greeting}) {
    return (
        <div>
            <h2> {greeting} </h2>
        </div>
    )
}