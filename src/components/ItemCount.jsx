import {useEffect, useState} from 'react'
import './ItemCount.scss'

export function ItemCountComponent ({ stock, initial }) {
    const [cantidad, setCantidad] = useState(0);

    useEffect (()=> {
        setCantidad(initial);
    }, [])
    
    function validarCantidadSuma (){
        if (cantidad < stock){
            setCantidad(cantidad+1)  
        }
    }

    function validarCantidadResta (){
        if (cantidad > 0){
            setCantidad(cantidad-1)  
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