import { createContext, useEffect, useState } from "react";
import productos from '../productos.json';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [listProducts, setListProducts] =useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(function () {
            resolve(productos);
        }, 500);
        });

        promesa.then(result => {setListProducts(result)})
    
    },[])

    function isInCart (id){
        const aux = cart.find(p => p.id === id)
        console.log(aux)
        console.log(cart)
        if (aux === undefined){
            return false
        }else {
            return true
        }
    }

    function addToCart(cantidad, id) {

        if (isInCart (id)){
            const findProduct = cart.find(e => parseInt(e.id) === id)
            console.log(id)
            console.log(findProduct)
            findProduct.cantidad = findProduct.cantidad + cantidad
            const newCart = cart.filter(e => e.id !== id)
            console.log(newCart)
            setCart([...newCart, findProduct])     
            console.log(cart) 
        } else {
            const producto = listProducts.find(e => parseInt(e.id) == id)
            console.log(producto)
            producto.cantidad = producto.cantidad + cantidad
            console.log(producto)
            console.log(cart)
            setCart([...cart, producto]) 
            console.log(cart) 
        }
    }

    function removeFromCart (id){

        if (isInCart(id)){
            console.log(cart)
            const findProduct = cart.find(e => e.id === id) 
            console.log(findProduct)
            findProduct.cantidad = 0
            const newCart = cart.filter(e => e.id !== id)
            console.log(cart) 
            setCart([newCart])    
            console.log(cart) 
        }

    }


    return <CartContext.Provider value={{listProducts, cart, setListProducts, addToCart, removeFromCart}} >
        {children}
    </CartContext.Provider>
}