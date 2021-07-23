import './ItemListContainer.scss'
import {useContext, useEffect, useState} from 'react'
import {ItemListComponent} from '../components/ItemList.jsx'
import {useParams} from 'react-router-dom'
import {CartContext} from '../context/CartContext'

export const ItemListContainer = () => {

    const CONTEXT = useContext (CartContext)
    const [show, setShow] =useState([]);
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            const categoria = CONTEXT.listProducts.filter(producto => producto.categoria === id)
            setShow(categoria);
        }else {
            setShow(CONTEXT.listProducts);
        }
    },[id,CONTEXT.listProducts])


    return (
        <div>
            <ItemListComponent productos= {show}/>
        </div>
    )
}

