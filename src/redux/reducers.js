import { combineReducers } from 'redux';
import products from './products/reducer';
import cart from './cart/reducer';

const reducers = combineReducers({
  products,
  cart
})

export default reducers;