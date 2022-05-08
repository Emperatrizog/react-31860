import { Link } from "react-router-dom";

const GetItems =({cafe}) =>{

    return(
        <div className="top-title ">
            <div className="bg-house-green">
            <img className="" src={cafe.pictureUrl}/><br />
            <strong className="title-product">Tipo de Café: {cafe.name}</strong><br /><br />
            </div><br />
            <strong>Categoría: {cafe.category}</strong><br />
            <strong>Más detalles: {cafe.descripcion}</strong>
            <br /><br />
            <Link to='/'><button className="btn-coffee">Regresar al home</button></Link>

        </div>
    );
    
}

export default GetItems
