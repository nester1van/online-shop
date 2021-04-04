import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persisor } from './redux/store';
import NavBar from './components/NavBar/NavBar';
import ProductsListPage from './pages/ProductsListPage';
import CartPage from './pages/CartPage';
import "./styles.scss";

export default function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persisor}>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/"><ProductsListPage/></Route>
            <Route path="/cart"><CartPage/></Route>
          </Switch>
        </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}
