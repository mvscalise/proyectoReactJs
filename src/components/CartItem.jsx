import {CartContext} from '../context/CartContext'
import {useContext, useState} from 'react'
import './CartItem.scss'


export const CartItem = ({producto}) => {

    const { addToCart, removeFromCart} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(producto.cantidad);
 
    function validarSuma(){
        let suma = cantidad + 1
        if (suma < producto.available_quantity){
            addToCart(producto, suma , producto.id)
            setCantidad(suma)
        }
    }

    function validarResta(){
        console.log(producto.cantidad)
        let resta = cantidad - 1
        if (resta > 0){
            addToCart(producto, resta , producto.id)
            setCantidad(resta)
        }else{
            removeFromCart(producto.id)
            setCantidad(0)
        }
    }

   

    return(
        
        <section className="cartItem">
            
                <h2> {producto.title}  </h2>
                <img className="img" src={producto.img} alt='imagenDeProducto'/>
                <p> CLP $ {producto.price}</p>
                <button onClick={() => {validarResta()}}>-</button>
                <p>{cantidad}</p>
                <button onClick={() => {validarSuma()}}>+</button>                        
            
        </section> 
    )
}
