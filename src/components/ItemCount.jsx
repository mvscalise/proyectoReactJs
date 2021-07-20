import {useState, useContext} from 'react'
import './ItemCount.scss'
import {CartContext} from '../context/ShopContext'

export function ItemCountComponent ({ stock, initial, id}) {
    const [cantidad, setCantidad] = useState(initial);
    const { addToCart } = useContext(CartContext);

    
    function validarCantidadSuma (){
        if (cantidad < stock){
            setCantidad(cantidad+1) 
            console.log('Has agregado un producto')     
        }else{
            console.log('no hay stock')
        }
    }

    function validarCantidadResta (){
        if (cantidad > initial){
            setCantidad(cantidad-1) 
            console.log('Has eliminado un producto')  
        }
    }

    function agregar (){
        if(cantidad > 0){
            addToCart( cantidad, id)
        } else {
            console.log ('no has seleccionado cantidad')
        }

    }


  
    return (
        <section id= 'contador'>
            <button onClick={() => {validarCantidadResta()}}>-</button>
            <p> {cantidad} </p>
            <button onClick={() => {validarCantidadSuma()}}>+</button>

            <button onClick={() => {agregar()}}>Agregar al Carrito</button>

        </section>
    )
}