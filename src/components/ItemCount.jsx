import {useState, useContext} from 'react'
import './ItemCount.scss'
import {CartContext} from '../context/ShopContext'

export function ItemCountComponent ({ stock, initial, producto}) {
    const [cantidad, setCantidad] = useState(initial);
    const { addToCart } = useContext(CartContext);
    const { removeFromCart } = useContext(CartContext);

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

    function agregar (){
        if(cantidad > 0){
            addToCart( producto, cantidad, id)
        } else {
            console.log ('no has seleccionado cantidad')
        }
    }

    function eliminar (){
        removeFromCart(id)
        console.log ('me estas eliminado')
    }

  
    return (
        <section id= 'contador'>
            <div className="cantidad">
                <button onClick={() => {validarCantidadResta()}}>-</button>
                    <p> {cantidad} </p>
                <button onClick={() => {validarCantidadSuma()}}>+</button>
            </div>
            <div className="cart">
                <button onClick={() => {agregar()}}>Agregar al Carrito</button>
                <button onClick={() => {eliminar()}}> Eliminar producto </button>
            </div>
            

        </section>
    )
}