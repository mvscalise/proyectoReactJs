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

    
    function addToCart(cantidad, id) {

        const aux = cart.find(p => p.id === id)

        if (aux === undefined){
            const producto = listProducts.find(e => e.id === id)
            producto.cantidad = producto.cantidad + cantidad
            setCart([...cart, producto])     
   
        } else {
            const findProduct = cart.find(e => e.id === id)
            console.log(id)
            console.log(findProduct)
            findProduct.cantidad = findProduct.cantidad + cantidad
            const newCart = cart.filter(e => e.id =! id)
            console.log(newCart)
            setCart([...newCart, findProduct])     
            console.log(cart) 
        }
    }





    return <CartContext.Provider value={{listProducts, cart, setListProducts, addToCart}} >
        {children}
    </CartContext.Provider>
}