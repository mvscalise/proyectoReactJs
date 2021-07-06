import React from 'react'
import './ItemListContainer.scss'
import {useEffect, useState} from 'react'
import {ItemListComponent} from '../components/ItemList.jsx'


export const ItemListContainer = () => {
    const [listProducts, setListProducts] =useState([])

    useEffect(()=>{
        async function getDataML(){
            const response = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=novelas&limit=6");
            const data = await response.json();
            setListProducts(data.results)
        }

        getDataML()
    }, [])
    console.log(listProducts)

    return (
        <div>
            <ItemListComponent productos= {listProducts}/>
        </div>
    )
}