import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <div className="bg-amber-900 w-full h-screen"></div>
    <ItemListContainer greeting='Bienvenidx a la cafetería, conoce nuestros productos:'></ItemListContainer>
    </>
  );
}

export default App;
