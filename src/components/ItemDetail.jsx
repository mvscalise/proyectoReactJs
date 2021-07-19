import {ItemCountComponent} from "./ItemCount.jsx"
import { useState } from "react"
import {Link} from 'react-router-dom'
import './ItemDetail.scss'


export const ItemDetailComponent = ({producto}) => {
   const [cart, setCart] = useState([])
   //const [isAdded, setIsAdded] = useState(false)

   console.log(producto)
   function addToCart(){
        setCart([...cart, producto])
        console.log(cart)
        //setIsAdded(true);
   }

  
    
    return(
        
        <section className="detalle">
            <h2> {producto.title}  </h2>
            <img src={producto.thumbnail} alt='imagenDeProducto'/>
            
            <p> CLP $ {producto.price}</p>
            
            <div className="contador">
                 <ItemCountComponent stock={producto.available_quantity} initial={0} addToCart={addToCart}/>
                 
            </div>
            <div>
                <Link to={`/cart`} style={{ textDecoration: 'none' }}> <button> Terminar Compra </button> </Link>
            </div>
        </section> 
    )
}