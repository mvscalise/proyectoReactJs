import './App.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {NavbarComponent} from './components/NavbarComponent/navbar.jsx';
import {ItemListContainer} from './containers/ItemListContainer.jsx';
import {ItemDetailContainer} from './containers/ItemDetailContainer.jsx';



function App() {
  return (
    <div className="App">
      <header >
      
        <NavbarComponent />
        <ItemDetailContainer />
        <ItemListContainer  />
        

      </header>
    </div>
  );
}

export default App;
