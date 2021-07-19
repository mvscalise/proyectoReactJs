import { createContext, useEffect, useState } from "react";
//import productos from '../productos.json';
//import { useParams } from "react-router";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    //const [listProducts, setListProducts] = useState([]);

    //useEffect(() => {
    //  const promesa = new Promise((resolve, reject) => {
    //        setTimeout(function () {
    //            resolve(productos);
    //        }, 2000);
    //    });

    //    promesa.then(result => {setListProducts(result)})
    //    console.log(listProducts);
    //    
    //},[])
 

    const [listProducts, setListProducts] =useState([]); 
    console.log(listProducts)

    //useEffect(()=>{

    //    async function getDataML(){
    //        const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=novelas&limit=8`);
    //        const data = await response.json();
    //        setListProducts(data.results);
    //        
    //    }

    //    getDataML()

    //})

    useEffect (()=>{
        console.log('hola')
    })

    console.log(listProducts)

    return <CartContext.Provider value={{ listProducts, setListProducts}}>
        {children}
    </CartContext.Provider>;
}