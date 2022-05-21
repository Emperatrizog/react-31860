import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext} from "../CartContext";
import ItemCount from "./ItemCount";


export default function ItemDetail ({cafe}) {
    const {addToCart} = useCartContext();
    
    function handleOnAdd(count) {
        addToCart(cafe, count);
        setTerminar(true)
        console.log(count)
      }
      
      const [terminar,  setTerminar] = useState(false)
      

    return(
        <div className="top-title ">
            <div className="bg-house-green">
            <img className="" src={cafe.pictureUrl}/><br />
            <strong className="title-product">Tipo de Café: {cafe.name}</strong><br /><br />
            </div><br />
            <strong>Categoría: {cafe.category}</strong><br />
            <strong>Más detalles: {cafe.descripcion}</strong><br /><br />
            {terminar ? 
            
            (<Link to="/cart" className="btn-coffee">Terminar Compra</Link>) 
            
            : 
            (<ItemCount initial={1} stock={cafe.stock} onAdd={handleOnAdd}/>)}

            <br /><br />
            <Link to='/'><button className="btn-coffee">Regresar al home</button></Link> <br></br><br></br>
           

        </div>
    );
    
}

