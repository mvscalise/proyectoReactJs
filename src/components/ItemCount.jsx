import {useState} from 'react'
import './ItemCount.scss'

export function ItemCountComponent ({ stock, initial }) {
    const [cantidad, setCantidad] = useState(initial);
    
    function validarCantidadSuma (){
        if (cantidad < stock){
            setCantidad(cantidad+1) 
            console.log('Has agregado un producto')     
        }
    }

    function validarCantidadResta (){
        if (cantidad > initial){
            setCantidad(cantidad-1) 
            console.log('Has eliminado un producto')  
        }
    }

    return (
        <section id= 'contador'>
            <button onClick={() => {validarCantidadResta()}}>-</button>
            <p> {cantidad} </p>
            <button onClick={() => {validarCantidadSuma()}}>+</button>
        </section>
    )
}