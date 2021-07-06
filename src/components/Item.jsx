import {ItemCountComponent} from "./ItemCount.jsx"
import './Item.scss'



export const ItemComponent = ({name, precio, img, stock}) => {
    return(
        
        <div className ="card" >
            <h2> {name}  </h2>
            <img className="img" src={img} alt='imagenDeProducto'/>
            <p className="precio"> CLP $ {precio}</p>
            <ItemCountComponent stock={stock} initial={0}/>
        </div> 
    )
}
