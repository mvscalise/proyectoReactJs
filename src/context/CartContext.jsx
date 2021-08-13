import { createContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
 
    const [listProducts, setListProducts] =useState([]);
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty ] = useState(0)

    const[orderId, setOrderId]= useState();
        
/**
 * Con este UseEffect traemos unas sola vez nuestros productos de Firebase 
 * y lo almacenamos en listProducts[] para usarlo en todos los componentes
 * Tambien revisa si tenemos un carrito en el storage para considerarlo.
 */
    useEffect(()=> {
        async function getDataFromFirestore (){
            const DB = getFirestore();
            const COLLECTION = DB.collection('misProductos');
            const response = await COLLECTION.get();
            const aux = response.docs.map(element => {
                return {id: element.id, ...element.data()}
            })
            setListProducts(aux)
        } 
        getDataFromFirestore();

        
        if (localStorage.getItem("carrito") ){
            setCart(JSON.parse(localStorage.getItem("carrito")));
        }

    }, [])


/**
 * Este UseEffect calcula el total del pedido, la cantidad de productos 
 * y actualiza el storage cada vez que se modifica el carrito dentro de
 * nuestra aplicacion* 
 */
    useEffect(() => {
        getTotalPrice ();
        getTotalQ();
        localStorage.setItem("carrito",JSON.stringify(cart)); 
    }, [cart, totalQty, totalPrice]);


/**
 * Funcion para validar si el producto ya esta en el carrito en funcion de su id
 */
    function isInCart(id){

        const item = cart.find(p => p.id === id)

        if (item === undefined){
            return false
        }
        else {
            return true
        }
    }

/**
 * Agrega el producto al carrito considerando el resultado de is InCart
 * Si el producto ya esta en el carrito, modifica su propiedad de cantidad
 * Si el producto no esta, lo crea y lo agrega.
 */

    function addToCart( producto, cantidad, id,e) {


         if (isInCart (id)){

            const findProduct = cart.findIndex(e => e.id === id)
            cart[findProduct].cantidad = cart[findProduct].cantidad + cantidad  
            setCart(cart)  

        } else {

            const nuevoProducto = { id: producto.id, title: producto.title, categoria: producto.categoria, price: producto.price,
            descripcion: producto.descripcion, url: producto.url, available_quantity: producto.available_quantity, cantidad: producto.cantidad = cantidad}
            const aux = [...cart, nuevoProducto]
            setCart(aux) 

        }    

        getTotalPrice ();
        getTotalQ();
        
    }
    
/**
* Funcion para eliminar el producto del carrito
*/
    function removeFromCart (id){
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
        getTotalPrice ()
        getTotalQ()
    }

/**
* Funcion para vaciar el carrito
*/ 
    function clearCart (){
        setCart([])
        getTotalPrice (0)
        getTotalQ(0)
        localStorage.clear();
    }

/**
* Funcion para calcular el valor total del carrito
*/ 
    
    function getTotalPrice (){
        
        const costoDelPedido = cart.reduce((prev, next) => prev + (next.price*next.cantidad), 0);        
        setTotalPrice(costoDelPedido)
    }

/**
* Funcion para calcular la cantidad de productos que hay en el carrito
*/ 

function getTotalQ() {
    const cantidadTotal = cart.reduce((prev, next) => prev + next.cantidad, 0);
    setTotalQty(cantidadTotal);
}


function whatsApp () {
        window.location.href=`https://api.whatsapp.com/send/?phone=56945820564&text=Hola !!!, Vi tus productos y quiero hacer una consulta`    
}    

function actualizarStock(){
    const DB = getFirestore();
    cart.forEach(element=>{
        let COLLECTION = DB.collection('misProductos').doc(element.id);
        let aux = element.available_quantity - element.cantidad;
        COLLECTION.update({available_quantity : aux})
        element.available_quantity = aux 
        setCart(cart)
    })
}


// Aplicando MercadoPago

async function enviarPedido () {
    
    const jsonMP = cart.map((element) => {
        let nuevoElemento = {
            title: element.title,
            description: element.descripcion,
            picture_url: element.url,
            category_id: element.categoria,
            quantity: element.cantidad,
            currency_id: "CLP",
            unit_price: element.price
        };
        return nuevoElemento;
      });

    
    if (cart.length > 0){
        let data = await fetch ('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST', 
            headers: {
                "Authorization": "Bearer TEST-8957954100028902-060121-8ff2e0ccee29f17c7e1d0c4b07d423de-765799328"
            },
            body: JSON.stringify({items: jsonMP}),
        });
        let responseMP = await data.json();
        window.open(responseMP.init_point, "ventana de pago");
    } 
}



return <CartContext.Provider value={{listProducts, cart, totalPrice, totalQty,setOrderId, clearCart, setListProducts, addToCart, removeFromCart, whatsApp, actualizarStock, enviarPedido}} >
        {children}
</CartContext.Provider>
}