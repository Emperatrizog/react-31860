const ItemListContainer = ({greeting}) => {
    return (
        <>

<div className='shadow-md w-full fixed top-12 left0'>
            <div className='flex w-full items-center text-center justify-between bg-orange-300 py4 md:px-10 px-7'>
                <div className="w-full">
                <ul className="w-full flex p-3">
                    <span>{greeting}</span>
                    <li className="flex">
                        <li><a className="text-blue-500 hover:text-blue-800 pl-10">Nosotros</a></li>
                        <li><a className="text-blue-500 hover:text-blue-800 pl-10">Menu</a></li>
                        <li><a className="text-blue-500 hover:text-blue-800 pl-10">Suscripción</a></li>
                    </li>    
                </ul>
                </div>
            </div>
        </div>

        </> 

    )
}

export default ItemListContainer;