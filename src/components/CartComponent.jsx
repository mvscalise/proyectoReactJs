import './CartComponent.scss'
import { getFirestore } from '../firebase/index.jsx'
import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext'
import { CartItem } from './CartItem.jsx'


export function CartComponent () {

    const [form, setForm] = useState({name: '', mail: '', phone: ''})
    
    const {cart, clearCart, totalPrice, whatsApp, actualizarStock, enviarPedido, setOrderId} = useContext (CartContext)

        
    return(
        <section >

            <div className="finalizarPedido">
                {cart.length === 0 ? 
                    (<Link to={`/`} style={{ textDecoration: 'none' }}> <p className="elegirPedido" > Ups! no has elegido aun </p> </Link> ) :
                    (cart.map(element => {
                        return(
                            <CartItem key={element.id} producto={element} />
                        )
                })) }

                {cart.length === 0 ? (<p > Recuerda que puedes pedir la cantidad que quieras</p> ) :  (<h2>El Total de tu pedido es: CLP $ {totalPrice} </h2>) }   
                

                {cart.length === 0 ? (<button className="whatsApp" onClick={() => {whatsApp()}}> Tienes dudas?, escribenos </button>) :(<button className="vaciar" onClick={() => {clearCart()}}> Vaciar carrito </button>)  }
                
            </div>
            
           
                <div>

                    <input type="text" className="form-control" placeholder="Nombre y Apellido" onInput={(event)=>{ setForm({...form, name:event.target.value})}} />			
                    
                    <input type="mail" className="form-control" placeholder="Ingresa tu email" onInput={(event)=>{ setForm({...form, mail:event.target.value})}} />
                    
                    <input type="phone" className="form-control" id="phone" name="Telefono" pattern="[9]{1}-[0-9]{4}-[0-9]{4}" placeholder="9-0000-0000" onInput={(event)=>{ setForm({...form, phone:event.target.value})}} />

                    <button className="boton" onClick={() => {
                      
                        const pedido = { buyer: {...form}, items:cart, total:totalPrice }
                        console.log(pedido.items)
                        const DB = getFirestore();
                        const COLLECTION = DB.collection('pedidoEnviado');
                        COLLECTION.add(pedido).then(({id})=>{
                            setOrderId(id);
                        });

                        actualizarStock()
                        enviarPedido()


                    }}> Finalizar Compra </button>

                </div>

        
           
        </section>
    )
}



