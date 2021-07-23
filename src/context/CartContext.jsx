import { createContext, useEffect, useState } from "react";
//import { getFirestore } from "../firebase";
import productos from '../productos.json';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [listProducts, setListProducts] =useState([]);
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty ] = useState(0)


    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(function () {
            resolve(productos);
        }, 500);
        });

        promesa.then(result => {setListProducts(result)})
    
    },[])

    //useEffect(()=> {
    //    async function getDataFromFirestore (){
    //        const DB = getFirestore();
    //        const COLLECTION = DB.collection('productos');
    //        const response = await COLLECTION.get();
    //        const aux = response.docs.map(element => {
    //            return {id: element.id, ... element.data()}
    //        })
    //        setListProducts(aux)
    //    } 
    //    getDataFromFirestore();
    //    console.log (listProducts)



    //}, [])



    function isInCart(id){
        const item = cart.find(p => p.id === id)
        if (item === undefined){
            return false
        }
        else {
            return true
        }
    }

    function addToCart( producto, cantidad, id) {
     

         if (isInCart (id)){
            const findProduct = cart.find(e => e.id === id)
            findProduct.cantidad = findProduct.cantidad + cantidad
            const newCart = cart.filter(e => e.id !== id)
            const aux = [...newCart, findProduct]
            console.log(aux)
            setCart(aux)     
            console.log(cart) 
            getTotalPrice ()
        } else {
            const nuevoProducto = { id: producto.id, title: producto.title, categoria: producto.categoria, price: producto.price,
            descripcion: producto.descripcion, url: producto.url, available_quantity: producto.available_quantity, cantidad: producto.cantidad = cantidad}
            const aux = [...cart, nuevoProducto]
            console.log(aux)
            setCart(aux) 
            console.log(cart) 
            getTotalPrice ()
        }    
        
    }
    

    function removeFromCart (id){
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
        console.log(cart)
        getTotalPrice ()
    }

    function clearCart (){
        setCart([])
        getTotalPrice (0)
    }
    
    function getTotalPrice (){
        
        let costoDelPedido = 0

        cart.forEach(element =>
            costoDelPedido =+ element.price * element.cantidad)
        
        console.log(costoDelPedido)
        setTotalPrice(costoDelPedido)
    }

    function getTotalQ() {
              let total = cart.reduce((acc, cur) => {
                return cur.quantity + acc
            }, 0);
            setTotalQty(total);
    }

 

    return <CartContext.Provider value={{listProducts, cart, totalPrice, totalQty,  clearCart, setListProducts, addToCart, removeFromCart}} >
        {children}
    </CartContext.Provider>
}