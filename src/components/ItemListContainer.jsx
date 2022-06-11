import { useEffect, useState } from "react";
import { Item } from "./Item";
import Loading from "./loading";
import { getAllItems as getCoffee} from "../data/Index";

const ItemListContainer = ({greeting}) => {
    //Desafío 03 Catálogo con MAPS y Promises
    
    const [coffee, setCoffee] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getCoffee().then(data =>{
            setLoading(false)
            setCoffee(data)
        })
    }, [])

  
    return (
        <>
        <div className="bg-amber-900 w-full">

            <div className="spacer-top shadow-md w-full top-1 left0">
                        <div className='flex w-full items-center text-center justify-between bg-orange-300 py4 md:px-10 px-7'>
                            <div className="w-full">
                                <ul className="w-full flex p-3">
                                    <span>{greeting}</span>

                                </ul>
                            </div>
                        </div>

                        <div className="ml-7 mt-10 "><h1 className="h1">Escoge tu Antojo</h1></div>
                        
                        <div className="">

                            <div className="flex flex-wrap">

                                {loading ?

                                    <Loading></Loading>
                                :
                                
                                coffee.map(r => (
                                    
                                <Item key={r.id} data={r}></Item> 
                                
                                ))}
                            </div>
                        </div>

            </div>
        </div>    


        </> 

    )
}

export default ItemListContainer;