import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cafe from "./menu/Cafe";
import ItemDetail from './menu/ItemDetail';
import CartContextProvider  from "./components/CartContext";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";


function  App() {
  return (
    <>

    <CartContextProvider>
      <BrowserRouter>
      <NavBar></NavBar>  
      <Routes>
        <Route path='/' element={  <ItemListContainer greeting='Bienvenidx a la cafetería, conoce nuestros productos:'></ItemListContainer>}/>
        <Route path='/menu/:productCategorie' element={<Cafe/>} />
        <Route path='/item/:cafeId' element={<ItemDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>

      </Routes>


      </BrowserRouter>
    </CartContextProvider>  
    </>
  );
}

export default App;
