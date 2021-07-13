import CartWidget from './cupcake.png'


export function CartWidgetComponent () {
    return(
        <div id= 'cartWidget' className="col-sm-6 col-md-6 col-lg-2">
            <img src={CartWidget}  alt = 'carrito'/>
        </div>
    )
}