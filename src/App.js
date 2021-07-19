import './App.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {NavbarComponent} from './components/NavbarComponent/Navbar.jsx';
import {ItemListContainer} from './containers/ItemListContainer.jsx';
import {ItemDetailContainer} from './containers/ItemDetailContainer.jsx';
import {CartComponent} from './components/CartComponent.jsx';
import {CartProvider} from './context/ShopContext';

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>

          <NavbarComponent />

          <Switch>

            <Route exact path={'/'}>
              <ItemListContainer />
            </Route>

            <Route path={'/category/:id'}>
              <ItemListContainer />
            </Route>

            <Route path={'/item/:id'} >
              <ItemDetailContainer />
            </Route>

            <Route path={'/cart'} >
              <CartComponent />
            </Route>

            <Route path={"*"} component={()=> <h1> 404 </h1>} />
     
          </Switch>

        </BrowserRouter>

        </CartProvider>
    </>

  );
}

export default App;
