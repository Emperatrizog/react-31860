import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/item/ItemDetailContainer";
import { getCoffeeDetail } from "../data/Index";



const ItemDetail = () => {
    const {cafeId} = useParams()
    const [cafe, setCafe] = useState({})

    useEffect( () => {
      
        (async () => {
            const IteList = await getCoffeeDetail(cafeId)
            setCafe(IteList)
        }) ()

    }, [])


     

    return(
        <div className="top-title">
        <h1 >Detalles del Café </h1>
        {<ItemDetailContainer cafe={cafe}/>}

        </div>
   
    );
};

export default ItemDetail


