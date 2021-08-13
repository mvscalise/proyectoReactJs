import {CartContext} from '../context/CartContext'
import {useContext, useState} from 'react'
import './CartItem.scss'


export const CartItem = ({producto}) => {

    const { addToCart, removeFromCart} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(producto.cantidad);
 
    function validarSuma(){
        let suma = 1
        let aux = cantidad + 1
        if (aux < producto.available_quantity){
            addToCart(producto, suma , producto.id)
            setCantidad(cantidad + 1)
        }
    }

    function validarResta(){
        let resta = - 1
        let aux = cantidad + resta
        if (aux > 0){
            addToCart(producto, resta , producto.id)
            setCantidad(cantidad - 1)
        }else{
            removeFromCart(producto.id)
            setCantidad(0)
        }
    }

   

    return(
        
        <section className="cartItem">
            
                <h2> {producto.title}  </h2>
                <img  src={producto.url} alt='imagenDeProducto'/>
                <p> CLP $ {producto.price}</p>
                <div>
                    <button onClick={() => {validarResta()}}>-</button>
                        <p>{cantidad}</p>
                    <button onClick={() => {validarSuma()}}>+</button> 
                </div>
                                       
            
        </section> 
    )
}
