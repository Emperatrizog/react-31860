import { Link } from "react-router-dom";


export const Item = ({data}) => {
    return(
        <div className=" mt-10 mb-10">

                    <div className="card-cart">
                        <img className="card-cart-color" src={data.pictureUrl}/>
                        <div>{data.name}</div>
                        <div>{data.category}</div>
                        <div>$ {data.price}</div><br/>

                        <Link to ={`/item/${ data.id }`}> <button className="btn-coffee">Ver Detalles</button></Link>
                    </div>
        </div>
    )
}

