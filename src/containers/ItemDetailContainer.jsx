import React from 'react'
import {useEffect, useState} from 'react'
import {ItemDetailComponent} from '../components/ItemDetail.jsx'


export const ItemDetailContainer= () => {
    const [selectProduct, setSelectProduct] =useState([])

    useEffect(()=>{
        async function getProductML(){
            const response = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=novelas&limit=8");
            const data = await response.json();
            const product = data.results[7];
            setSelectProduct(product);
        }
        
        getProductML()

    }, [])
    console.log(selectProduct)

    return (
        <div>
            <ItemDetailComponent producto={selectProduct} />
        </div>
    )
}