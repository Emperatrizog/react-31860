import { Link } from "react-router-dom";


export const Item = ({data}) => {
    return(
        <div>
            <div className="container mx-auto px-4 grid grid-flow-col w-30 ">
                <div className="w-30">
                    <img className="" src={data.pictureUrl}/>
                    <div>{data.name}</div>
                    <div>{data.category}</div>
                    <Link to ={`/item/${ data.id }`}> <button className="btn-coffee">Ver Detalles</button></Link>

                </div>    
            </div>
        </div>
    )
}

