import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext} from "../CartContext";
import ItemCount from "./ItemCount";


export default function ItemDetailContainer ({cafe}) {
    const {addToCart} = useCartContext();
    
    function handleOnAdd(count) {
        addToCart(cafe, count);
        setTerminar(true)
        console.log(count)
      }
      
      const [terminar,  setTerminar] = useState(false)
      

    return(
        <div className="">
            <div className="bg-house-green">
                <img className="" src={cafe.pictureUrl}/><br />
                <div><strong className="title-product">Producto: {cafe.name}</strong><br />
                <strong>Categoría:</strong> <p className="t-content">{cafe.category}</p>
                <strong>Más detalles:</strong> <p className="t-content">{cafe.descripcion}</p></div>
            </div><br />

            <div className="ml-10">
                {terminar ? 
                
                (<Link to="/cart" className="btn-coffee">Terminar Compra</Link>) 
                
                : 
                (<ItemCount initial={1} stock={cafe.stock} onAdd={handleOnAdd}/>)}

                <br /><br />
                <Link to='/'><button className="btn-coffee">Regresar al home</button></Link> <br></br><br></br>
            </div>

        </div>
    );
    
}

