import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Nosotros from "./menu/Nosotros";
import ItemDetail from './menu/ItemDetail';
import CartContextProvider  from "./components/CartContext";
import Cart from "./components/pages/Cart";


function  App() {
  return (
    <>

    <CartContextProvider>
      <BrowserRouter>
      <NavBar></NavBar>  
      <Routes>
        <Route path='/' element={  <ItemListContainer greeting='Bienvenidx a la cafetería, conoce nuestros productos:'></ItemListContainer>}/>
        <Route path='/menu/nosotros' element={<Nosotros/>} />
        <Route path='/item/:cafeId' element={<ItemDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>


      </BrowserRouter>
    </CartContextProvider>  
    </>
  );
}

export default App;
