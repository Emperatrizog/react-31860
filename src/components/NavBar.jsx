import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
        <div className='shadow-md w-full fixed top-0 left0'>
            <div className='p-4 md:flex items-center justify-between bg-orange-50 py4 md:px-10 px-7'>
                <div className="logo">
                    <Link to='/'><span className="p-4 text-3x1 0 mr-1 pt-2">☕  La Cafetería</span></Link>
                </div>
                
                <div className="categorias">
                     <li><Link to='/menu/Cafe' className="text-blue-500 hover:text-blue-800 pl-10">Cafe</Link></li>
                     <li><Link to='/menu/Chocolate' className="text-blue-500 hover:text-blue-800 pl-10">Chocolate</Link></li>
                </div>
                <div className='md:flex med:items-center cart'>
                    <CartWidget></CartWidget>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default NavBar