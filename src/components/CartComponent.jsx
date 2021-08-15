import './CartComponent.scss'
import { getFirestore } from '../firebase/index.jsx'
import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext'
import { CartItem } from './CartItem.jsx'


export function CartComponent () {

    const [form, setForm] = useState({name: '', mail: '', phone: '', date: ''});
    const [sendRequest, setSendRequest] = useState(false);
    const [orderTracking, setOrderTracking] = useState(false);
    const [mensaje, setMensaje] = useState(false);
    const {cart, clearCart, totalPrice, whatsApp, actualizarStock, enviarPedido, setOrderId, orderId} = useContext (CartContext);



    async function generarPedido() {
        const pedido = { buyer: {...form}, items:cart, total:totalPrice }
        const DB = getFirestore();
        const COLLECTION = DB.collection('pedidoRecibido');
        const { id } = await COLLECTION.add(pedido);
        console.log(id)
        setOrderId(id)
        setSendRequest(false)
        setOrderTracking(true);
        actualizarStock();
    }
 
    
    function makeAnOrder() {
        setSendRequest(true);
    };

    function finishBuying() {
        clearCart()
        setMensaje(true)   
    }
    
    function goMercadopago() {
        enviarPedido()
        setMensaje(true)
    }

    if (mensaje){
        return(
            <div className='mensaje'>
                <h3> Te esperamos en nuentro local </h3>
                <h3> Para retirar tu pedido entrega este código en caja</h3>
                <h2> {orderId} </h2> 
                <Link to={`/`} style={{ textDecoration: 'none' }}> <p className="elegirPedido" > Revisa nuestro catalogo para tu próximo pedido</p> </Link>
            </div>
        )
    };
    
    if (sendRequest) {
        return (
            <div className='formulario'>

                <h2> Ingresa tus datos para continuar</h2>

                <input type="text" className="form-control" placeholder="Nombre y Apellido" onInput={(event)=>{ setForm({...form, name:event.target.value})}} />			
                    
                <input type="mail" className="form-control" placeholder="Ingresa tu email" onInput={(event)=>{ setForm({...form, mail:event.target.value})}} />
                    
                <input type="phone" className="form-control" id="phone" name="Telefono" pattern="[9]{1}-[0-9]{4}-[0-9]{4}" placeholder="9-0000-0000" onInput={(event)=>{ setForm({...form, phone:event.target.value})}} />

                <input type="date" className="form-control" placeholder="Fecha de retiro" onInput={(event)=>{ setForm({...form, date:event.target.value})}} />

                <button className="boton" onClick={() => {generarPedido()}}> Finalizar Compra </button>

            </div>
        )
    };
    
    if (orderTracking) {
        return (
            <div className="text-center elegirPago">
              <h2>Ya casi terminamos</h2>
              <h2> Indicanos tu método de pago </h2>
              <button className="boton" onClick={() => {goMercadopago()}}>Pago online </button>
              <button className="boton" onClick={() => {finishBuying()}}> Prefiero pagar al retirar </button>
            </div>
        )
    };
    
    if (cart.length === 0) {
        return (
          <section>
                <div className="finalizarPedido">
                    <p>No tienes productos en tu carrito</p>
                    <Link to={`/`} style={{ textDecoration: 'none' }}> <p className="elegirPedido" > Ir a armar pedido!</p> </Link>
                    <p> Recuerda que puedes pedir la cantidad que quieras</p> 
                    <button className="whatsApp" onClick={() => {whatsApp()}}> Tienes dudas?, escríbenos </button>
                </div>
          </section>
        )
    } else {
        return (
            <section>
                <div className="finalizarPedido">
                    {cart.map(element => {
                        return(
                            <CartItem key={element.id} producto={element} />
                        )
                    })}

                    <h2>El Total de tu pedido es: CLP $ {totalPrice} </h2> 

                    <Link to={`/`} style={{ textDecoration: 'none' }}> <p className="elegirPedido" > Agregar más productos </p> </Link>
                    <button className="vaciar" onClick={() => {clearCart()}}> Vaciar carrito </button>
                    <button  className="enviarPedido" onClick={() => {makeAnOrder()}}> Hacer pedido </button>                
                </div>
            </section>
        )
    }
}

          
    



