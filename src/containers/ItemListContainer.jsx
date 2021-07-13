import './ItemListContainer.scss'
import {useEffect, useState} from 'react'
import {ItemListComponent} from '../components/ItemList.jsx'
import {useParams} from 'react-router-dom'

export const ItemListContainer = () => {
    const [listProducts, setListProducts] =useState([]);
    const {id} = useParams();

         
    useEffect(()=>{

        async function getDataML(){
            const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=${id ? id : 'novelas'}&limit=8`);
            const data = await response.json();
            setListProducts(data.results);
            
        }

        getDataML()

    }, [id])

    console.log(listProducts)

    return (
        <div>
            <ItemListComponent productos= {listProducts}/>
        </div>
    )
}

