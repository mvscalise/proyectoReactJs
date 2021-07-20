import {useContext, useEffect, useState} from 'react'
import {ItemDetailComponent} from '../components/ItemDetail.jsx'
import {useParams} from 'react-router-dom'
import {CartContext} from '../context/ShopContext'

export const ItemDetailContainer= () => {
       

    const CONTEXT = useContext (CartContext)
    const [selectProduct, setSelectProduct] =useState([]);
    const {id} = useParams();
    

    useEffect(()=>{
        if(id){
            let aux = CONTEXT.listProducts;
            const seleccion = aux.find(producto => producto.id === id)
            setSelectProduct(seleccion);
        } 
    },[id, CONTEXT.listProducts])


    return (
        <div>
            <ItemDetailComponent producto={selectProduct} />
        </div>
    )
}