import React, { useState } from "react";
import {useCartContext} from "../CartContext";
import {createBuyOrder} from "./../../data/Index"
import { Link } from "react-router-dom";


function CartView(){
    const {cartList, removeFromCart, clearCart} = useCartContext();
    function handleBuy(){
        const buyOrder = {
            buyer: {
                name: "Frank",
                phone: "3118200393",
                email: "frank@email.com",
            },
            items: [...cartList],
            date: new Date(),
            total: 0
        }
        createBuyOrder(buyOrder)
        clearCart();
    }

    return ( 
        <>
            <div>
                {cartList.map ((item) => (
                    <div>
                    <div className="card-cart">
                        <div key={item.id}>
                            <img className="card-cart-color" src={item.pictureUrl}/>
                            <h1>Tipo de Café: {item.name}</h1>
                            <p>Cantidad: {item.amount}</p>      
                            <p>Precio: ${item.amount * item.price}</p><br/>  
                            <button onClick={()=>removeFromCart(item.id)} className="btn-coffee"> Eliminar Producto</button><br/>          
                        </div>
                    </div>

                    </div>))}
            </div>
            <div><button onClick={handleBuy} className="btn-coffee">Comprar</button></div>
            </>
            );    
}

export default CartView;