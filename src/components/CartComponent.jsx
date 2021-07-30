import {ItemComponent} from './Item.jsx'
import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext'
import { CartItem } from './CartItem.jsx'

import './CartComponent.scss'
import { getFirestore } from '../firebase/index.jsx'



export function CartComponent () {

    const [form, setForm] = useState({name: '', mail: '', phone: ''})
    const {cart, clearCart, totalPrice } = useContext (CartContext)


    console.log(form)

    return(
        <section className='cart' >
            {cart.length == 0 ? 
                (<Link to={`/`} style={{ textDecoration: 'none' }}> <button > Elegir producto </button> </Link> ) :
                (cart.map(element => {
                    return(
                        <CartItem key={element.id} producto={element} />
                    )
                })) }
            <div>
                <h2> CLP $ {totalPrice}</h2>
            </div>
            <div>
                <button onClick={() => {clearCart()}}> Vaciar carrito </button> 
            </div>

            <div>
                <input type="text" placeholder="Tu nombre" onInput={(event)=>{ setForm({...form, name:event.target.value})}} />
                <input type="mail" placeholder="Tu email" onInput={(event)=>{ setForm({...form, mail:event.target.value})}} />
                <input type="phone" id="phone" name="phone" pattern="[9]{1}-[0-9]{4}-[0-9]{4}" placeholder="9-0000-0000" onInput={(event)=>{ setForm({...form, phone:event.target.value})}} />

                <button onClick={() => {
                                      
                    const pedido = { buyer: {...form}, items:cart, total:totalPrice }
                    console.log(pedido)

                    const DB = getFirestore();
                    const COLLECTION =   DB.collection('pedidoRecibido');
                    COLLECTION.add(pedido);
                    
                }}> FINALIZAR COMPRA </button>
            </div>
        </section>
    )
}



