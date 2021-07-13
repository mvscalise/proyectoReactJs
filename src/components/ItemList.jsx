import {ItemComponent} from './Item.jsx'
import './ItemList.scss'


export const ItemListComponent = ({productos}) => {
    return (
        <div className ="presentarCards">
            {productos.map(element => {
                    return(
                        <ItemComponent key={element.id} id={element.id} name={element.title} precio={element.price} img={element.thumbnail} stock={element.available_quantity}/>
                    )
                })}
        </div>
    )
}