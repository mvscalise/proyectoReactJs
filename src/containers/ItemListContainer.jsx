import './ItemListContainer.scss'
import Loading from './perrito.png'
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
            {show.length > 0  ? <ItemListComponent productos= {show}/> : <img className = 'cargando' src={Loading} alt="cargando la pagina" /> }   
        </div>
    )
}

