import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {ItemDetailComponent} from '../components/ItemDetail.jsx'


export const ItemDetailContainer= () => {
    const {id} = useParams();
    const [selectProduct, setSelectProduct] =useState([]);
    

    useEffect(()=>{
        async function getProductML(){
            const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
            const data = await response.json();
            setSelectProduct(data);
        }
        
        getProductML()

    }, [id])
    console.log(selectProduct)

    return (
        <div>
            <ItemDetailComponent producto={selectProduct} />
        </div>
    )
}