import React from "react";
import CartView from "./Cartview";
import {useCartContext} from "../CartContext"
import { Link } from "react-router-dom";

const Cart = () => {

    const {cartList} = useCartContext();

    return ( 
        <div className="block-pages">
        {
            cartList == 0 ? (<h1>El carrito está vacío</h1>) 
            
            : 
            ( <CartView></CartView>)
        }


        <div>  <br /><br />
        <Link to='/'><button className="btn-coffee">Seguir Comprando</button></Link> <br></br><br></br>
       </div>
       </div>
            );    
}

export default Cart;