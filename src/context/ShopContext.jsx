import { createContext, useEffect, useState } from "react";
import productos from '../productos.json';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [listProducts, setListProducts] =useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(function () {
            resolve(productos);
        }, 500);
        });

        promesa.then(result => {setListProducts(result)})
    
    },[])






    return <CartContext.Provider value={{listProducts, setListProducts}} >
        {children}
    </CartContext.Provider>
}