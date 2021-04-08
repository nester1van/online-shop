import {  INCREMENT_ITEM_COUNT, DECREMENT_ITEM_COUNT, ADD_NEW_ITEM, 
  REMOVE_ALL_ITEMS, REMOVE_CURRENT_ITEM } from './actions';

const initialCart = {
  cartItems: []
};

const cart = (state = initialCart, action) => {
  const { type, name, price } = action;
  let { cartItems } = state;
  let updatedCartItems;
  switch (type) {
    case INCREMENT_ITEM_COUNT:
      updatedCartItems = cartItems.map(item => {
      item.name === name && item.count++;
      return item;
      });
      return {cartItems: updatedCartItems};
    case DECREMENT_ITEM_COUNT:
      updatedCartItems = cartItems.map(item => {
      item.name === name && item.count--;
      return item;
      })
      .filter(item => item.count > 0);
      return {cartItems: updatedCartItems};
    case ADD_NEW_ITEM:
      if (cartItems.some(item => item.name === name)) {
      updatedCartItems = cartItems.map(item => {
        if (item.name === name) {
          item.count++;
        }
        return item;
      })
      } else {
      updatedCartItems = [...cartItems, {name, price, count: 1}];
      }
      return {cartItems: updatedCartItems};
    case REMOVE_ALL_ITEMS:
      return {cartItems: []};
    case REMOVE_CURRENT_ITEM:
      updatedCartItems = cartItems.filter(item => item.name !== name); 
      return {cartItems: updatedCartItems};
    default:
      return state;
  }
}

export default cart;