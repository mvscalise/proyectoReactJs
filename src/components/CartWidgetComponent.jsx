import CartWidget from './cupcake.png'
import {useContext} from 'react'
import {CartContext} from '../context/CartContext'

export function CartWidgetComponent () {

    const {totalQty} = useContext(CartContext);

    return(
        <div id= 'cartWidget' className="col-sm-6 col-md-6 col-lg-2">
            <img src={CartWidget}  alt = 'carrito'/>
            <h2>
                {totalQty}
            </h2>
        </div>
    )
}