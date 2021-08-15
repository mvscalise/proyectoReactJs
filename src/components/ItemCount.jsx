import {useState, useContext} from 'react'
import './ItemCount.scss'
import {CartContext} from '../context/CartContext'
import {Link} from 'react-router-dom'

export function ItemCountComponent ({ stock, initial, producto}) {
    const [cantidad, setCantidad] = useState(initial);
    const [sendToCart, setSendToCart] = useState(false)
    const { addToCart, removeFromCart } = useContext(CartContext);


    const id = producto.id;
    
    function validarCantidadSuma (){
        if (cantidad < stock){
            setCantidad(cantidad+1) 
            console.log('Has agregado un producto')     
        }else{
            console.log('no hay stock')
        }
    }

    function validarCantidadResta (){
        if (cantidad > 0){
            setCantidad(cantidad-1) 
            console.log('Has eliminado un producto')  
        }
    }

    function agregar(){
        if(cantidad > 0 ){
            addToCart(producto, cantidad, id)
            setSendToCart(true)
        }
    }

    function eliminar () {
        removeFromCart(id)
        setCantidad(0) 
        setSendToCart(false)
    }
 

   if (sendToCart){
    return (
        <section id= 'contador'>
            <div className="cartCount">
                <button onClick={() => {agregar()}}>Agregar al Carrito</button>
                <button onClick={() => {eliminar()}}> Eliminar producto </button>
            </div>
            <div className="terminarCompra">
                <Link to={`/cart`} style={{ textDecoration: 'none' }}> <button > Terminar Compra </button> </Link>
            </div>
        </section>
    )
   }else{
    return (
        <section id= 'contador'>
            <div className="cantidad">
                <button onClick={() => {validarCantidadResta()}}>-</button>
                    <p> {cantidad} </p>
                <button onClick={() => {validarCantidadSuma()}}>+</button>
            </div>
            <div className="cartCount">
                <button onClick={() => {agregar()}}>Agregar al Carrito</button>
                <button onClick={() => {eliminar()}}> Eliminar producto </button>
            </div>
        </section>
    )
   }
    
}