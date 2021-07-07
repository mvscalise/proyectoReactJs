import {ItemCountComponent} from "./ItemCount.jsx"
import './ItemDetail.scss'


export const ItemDetailComponent = ({producto}) => {
    return(
        
        <section className="detalle">
            <h2> {producto.title}  </h2>
            <img src={producto.thumbnail} alt='imagenDeProducto'/>
            <p> CLP $ {producto.price}</p>
            <div className="contador">
                <ItemCountComponent stock={producto.available_quantity} initial={0}/>
            </div>
        </section> 
    )
}