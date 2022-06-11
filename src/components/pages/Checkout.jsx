import React from "react";
import {createBuyOrder} from "./../../data/Index"

function Checkout(){
    const {orderDoc, orderData,} = createBuyOrder();

    return(
        <div>{orderDoc.map ((detalleCompra) => (
            <div key={detalleCompra.id}>
                            <img className="card-cart-color" src={detalleCompra.pictureUrl}/>
                            <h1>Tipo de Café: {detalleCompra.name}</h1>
                            <p>Cantidad: {detalleCompra.amount}</p>
                            <p>Hora de Compra: {detalleCompra.date}</p>

            </div>
        ))}</div>
    );
    
    }

export default Checkout;