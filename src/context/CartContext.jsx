import { createContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [listProducts, setListProducts] =useState([]);
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty ] = useState(0)


    //useEffect(() => {
    //    const promesa = new Promise((resolve, reject) => {
    //        setTimeout(function () {
    //        resolve(productos);
    //        }, 500);
    //    });

    //    promesa.then(result => {setListProducts(result)});
        

    //    getTotalPrice ()
    //    getTotalQ()

        

    //},[])

    
    useEffect(()=> {
        async function getDataFromFirestore (){
            const DB = getFirestore();
            const COLLECTION = DB.collection('misProductos');
            const response = await COLLECTION.get();
            const aux = response.docs.map(element => {
                return {id: element.id, ... element.data()}
            })
            setListProducts(aux)
        } 
        getDataFromFirestore();
        console.log (listProducts)



    }, [])




    function isInCart(id){
        const item = cart.find(p => p.id === id)
        if (item === undefined){
            return false
        }
        else {
            return true
        }
    }

    function addToCart( producto, cantidad, id,e) {


         if (isInCart (id)){

            const findProduct = cart.findIndex(e => e.id === id)
            cart[findProduct].cantidad = cart[findProduct].cantidad + cantidad
            //const newCart = cart.filter(e => e.id !== id)
            //const aux = [...newCart, findProduct]
            //console.log(aux)
            //setCart(aux)   
            setCart(cart)  
            console.log(cart) 
        } else {
            const nuevoProducto = { id: producto.id, title: producto.title, categoria: producto.categoria, price: producto.price,
            descripcion: producto.descripcion, url: producto.url, available_quantity: producto.available_quantity, cantidad: producto.cantidad = cantidad}
            const aux = [...cart, nuevoProducto]
            console.log(aux)
            setCart(aux) 
            console.log(cart) 
        }    

        getTotalPrice ();
        getTotalQ();
        
    }
    

    function removeFromCart (id){
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
        console.log(cart)
        getTotalPrice ()
        getTotalQ()
    }

    function clearCart (){
        setCart([])
        getTotalPrice (0)
        getTotalQ(0)
    }
    
    function getTotalPrice (){
        
        const costoDelPedido = cart.reduce((prev, next) => prev + (next.price*next.cantidad), 0);
        
        console.log(costoDelPedido)
        setTotalPrice(costoDelPedido)
    }

    function getTotalQ() {
        const cantidadTotal = cart.reduce((prev, next) => prev + next.cantidad, 0);
        setTotalQty(cantidadTotal);
    }

    useEffect(() => {
        getTotalPrice ();
        getTotalQ();
    }, [cart])

    return <CartContext.Provider value={{listProducts, cart, totalPrice, totalQty,  clearCart, setListProducts, addToCart, removeFromCart}} >
        {children}
    </CartContext.Provider>
}