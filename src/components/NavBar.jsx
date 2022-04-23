import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className='shadow-md w-full fixed top-0 left0'>
            <div className='p-4 md:flex items-center justify-between bg-orange-50 py4 md:px-10 px-7'>
                <div>
                    <span className="p-4 text-3x1 0 mr-1 pt-2">☕  La Cafetería</span>
                </div>
                <div className='md:flex med:items-center'>
                    <CartWidget></CartWidget>
                </div>
            </div>
        </div>
    )
}

export default NavBar