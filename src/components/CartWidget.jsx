import React from "react";
import { Link } from "react-router-dom";
import {useCartContext} from "./CartContext"

const CartWidget = () => {
    const {totalAmount, cartList} = useCartContext();

    return (
        <>
            <div className=''>
                
            {
            cartList == 0 ? (<h1>🛒 [0] </h1>) 
            
            : 
            (<div> <h1>🛒 [{totalAmount()}] <Link to='/cart' className="btn-coffee">ir al carrito</Link></h1></div>)
        }
            
            
            
            </div>

        </> 

    )
}

export default CartWidget;