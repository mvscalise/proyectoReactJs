import {ItemCountComponent} from "./ItemCount.jsx"
import {Link} from 'react-router-dom'
import './ItemDetail.scss'


export const ItemDetailComponent = ({producto}) => {
   
  
    
    return(
        
        <section className="detalle">
            <h2> {producto.title}  </h2>
            <img src={producto.url} alt='imagenDeProducto'/>
            
            <p> CLP $ {producto.price}</p>
            
            <div className="contador">
                 <ItemCountComponent stock={producto.available_quantity} initial={0} item={producto} producto={producto}/>
                 
            </div>
            <div className="boton">
                <Link to={`/cart`} style={{ textDecoration: 'none' }}> <button > Terminar Compra </button> </Link>
            </div>
        </section> 
    )
}