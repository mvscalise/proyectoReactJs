import CartWidget from './cupcake.png'
import './CartComponent.scss'



export function CartComponent () {
    return(
        <section className='cart' >
            <img src={CartWidget}  alt = 'carrito'/>
            <p > Aca va el cart</p>
        </section>
    )
}