import {ItemCountComponent} from "./ItemCount.jsx"
import { useState } from "react"
import {Link} from 'react-router-dom'
import './ItemDetail.scss'


export const ItemDetailComponent = ({producto}) => {
   const [cart, setCart] = useState([])
   const [isAdded, setIsAdded] = useState(false)

   function addToCart(product){
        setCart([...cart, product])
        setIsAdded(true);
   }
    
    return(
        
        <section className="detalle">
            <h2> {producto.title}  </h2>
            <img src={producto.thumbnail} alt='imagenDeProducto'/>
            <p> CLP $ {producto.price}</p>
            <p> Tienes {cart.length} libro agregado </p>
            <div className="contador">
                {isAdded ? <Link to={`/cart`} style={{ textDecoration: 'none' }}> <button> Terminar Compra </button> </Link> : <ItemCountComponent stock={producto.available_quantity} initial={0} addToCart={addToCart}/>}
            </div>
        </section> 
    )
}