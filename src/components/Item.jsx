import {Link} from 'react-router-dom'
import './Item.scss'


export const ItemComponent = ({id, name, precio, img }) => {

    
    return(
        
        <div className ="card" >
            <h2> {name}  </h2>
            <img className="img" src={img} alt='imagenDeProducto'/>
            <p> CLP $ {precio}</p>
            <Link to={`/item/${id}`} style={{ textDecoration: 'none' }} className="verProducto"> Ver Producto </Link>
        </div> 
    )
}
