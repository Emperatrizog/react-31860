import React, { useState } from "react";
import {useCartContext} from "../CartContext";

function CartView(){
    const {cartList, calcPriceCart, removeFromCart} = useCartContext();
    return ( 
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
                    <br></br>
                        <hr></hr><br></br>
                        <div>Total de la compra: ${calcPriceCart()} </div>
                        <br></br>

                    </div>))}
            </div>
            
            );    
}

export default CartView;