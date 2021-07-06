import './App.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {NavbarComponent} from './components/NavbarComponent/navbar.jsx';
import {ItemListContainer} from './containers/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <header >
      
        <NavbarComponent />
        <ItemListContainer  />

      </header>
    </div>
  );
}

export default App;
