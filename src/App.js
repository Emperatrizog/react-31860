import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Nosotros from "./menu/Nosotros";
import ItemDetail from './menu/ItemDetail';



function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>  
      <Routes>
        <Route path='/' element={  <ItemListContainer greeting='Bienvenidx a la cafetería, conoce nuestros productos:'></ItemListContainer>}/>
        <Route path='/menu/nosotros' element={<Nosotros/>} />
        <Route path='/item/:cafeId' element={<ItemDetail/>}/>

      </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
