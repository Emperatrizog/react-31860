import { useEffect, useState } from "react";
import { Item } from "./Item";
import Loading from "./loading";
import { Link } from "react-router-dom";
import { getAllItems as getCoffee} from "../data/index";


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
        <div className="bg-amber-900 w-full h-screen">

            <div className='shadow-md w-full fixed top-12 left0'>
                        <div className='flex w-full items-center text-center justify-between bg-orange-300 py4 md:px-10 px-7'>
                            <div className="w-full">
                                <ul className="w-full flex p-3">
                                    <span>{greeting}</span>
                                    <li className="flex">
                                        <li><Link to='/menu/Nosotros' className="text-blue-500 hover:text-blue-800 pl-10">Nosotros</Link></li>
                                        <li><Link to='/menu/Menu' className="text-blue-500 hover:text-blue-800 pl-10">Menu</Link></li>
                                        <li><Link to='/menu/Suscripcion' className="text-blue-500 hover:text-blue-800 pl-10">Suscripción</Link></li>
                                    </li>    
                                </ul>
                            </div>
                        </div>
                        
                        <div className="grid grid-flow-col ">
                            {loading ?

                                <Loading></Loading>
                            :
                             coffee.map(r => (
                             <Item key={r.id} data={r}></Item> 
                             
                             ))}
                        </div>

            </div>
        </div>    


        </> 

    )
}

export default ItemListContainer;