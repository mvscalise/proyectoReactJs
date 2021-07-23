import {useState, useContext} from 'react'
import './ItemCount.scss'
import {CartContext} from '../context/CartContext'

export function ItemCountComponent ({ stock, initial, producto}) {
    const [cantidad, setCantidad] = useState(initial);
    const { addToCart, removeFromCart  } = useContext(CartContext);

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

    function restar () {
        removeFromCart(id)
        setCantidad(0) 
    }
 
    return (
        <section id= 'contador'>
            <div className="cantidad">
                <button onClick={() => {validarCantidadResta()}}>-</button>
                    <p> {cantidad} </p>
                <button onClick={() => {validarCantidadSuma()}}>+</button>
            </div>
            <div className="cartCount">
                <button onClick={() => {addToCart( producto, cantidad, id)}}>Agregar al Carrito</button>
                <button onClick={() => {restar()}}> Eliminar producto </button>
            </div>
            

        </section>
    )
}