import {ItemComponent} from './Item.jsx'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext'
import { CartItem } from './CartItem.jsx'

import './CartComponent.scss'



export function CartComponent () {

    const {cart, clearCart, totalPrice } = useContext (CartContext)


    

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
                <h2> {totalPrice}</h2>
            </div>
            <div>
                <button onClick={() => {clearCart()}}> Vaciar carrito </button> 
            </div>
        </section>
    )
}



