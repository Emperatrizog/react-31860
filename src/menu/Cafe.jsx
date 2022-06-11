import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../components/Item";
import { getAllItems as getCoffee, getCoffeeCategory} from "../data/Index";
import Loading from "../components/loading";


const Cafe = () => {

    const [coffee, setCoffee] = useState([])
    const [loading, setLoading] = useState(true)
    const {productCategorie} =useParams()

    useEffect(()=> {
        if (productCategorie ===undefined){
            getCoffee(productCategorie).then((data) =>{

                setLoading(false)
                setCoffee(data)
            })
        } else{
            getCoffeeCategory(productCategorie).then((data)=>{
                setLoading(false)
                setCoffee(data)
                console.log(coffee)
            })
        }

    }, [productCategorie])

    return(
        <>
        

    <div className="top-title bg-house-green">
        <div className="">

            <div className="flex flex-wrap">

                {loading ?

                    <Loading></Loading>
                :
                                    
                coffee.map(r => (
                    
                    <Item data={r}></Item> 
                    
                    ))}
    
                
            </div>
        </div>
    </div>
</>  
   
    );
};

export default Cafe;