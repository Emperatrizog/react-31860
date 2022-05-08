import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../data/ItemList";
import GetItems from "../components/ItemDetailContainer";

const ItemDetail = () => {
    const {cafeId} = useParams()
    const [cafe, setCafe] = useState({})

    useEffect( () => {
      
        (async () => {
            const IteList = await getCoffeeDetail()
            setCafe(IteList)
        }) ()

    }, [])

    const getCoffeeDetail = () => {
        return new Promise( (resolve) => {
            setTimeout(() => {
                resolve( ItemList.find( r => r.id ==cafeId) )
            }, 2000);
            
        })
    }
     

    return(
        <div className="top-title">
        <h1 >Detalles del Café - {cafeId}</h1>
        {<GetItems cafe={cafe}/>}

        </div>
   
    );
};

export default ItemDetail


