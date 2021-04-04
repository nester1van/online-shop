import { INCREMENT_ITEM_COUNT, DECREMENT_ITEM_COUNT, ADD_NEW_ITEM, 
         REMOVE_ALL_ITEMS, REMOVE_CURRENT_ITEM } from './actions';

const initialCart = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0
};

const cart = (state = initialCart, action) => {
  const { type, name, price } = action;
  let { cartItems, totalPrice, totalCount } = state;
  let updatedCartItems;
  switch (type) {
    case INCREMENT_ITEM_COUNT:
      updatedCartItems = cartItems.map(item => {
        if (item.name === name) {
          item.count++;
          totalPrice += item.price;
          totalCount++;
        } 
        return item;
      });
      return {cartItems: updatedCartItems, totalPrice, totalCount};
    case DECREMENT_ITEM_COUNT:
      updatedCartItems = cartItems.map(item => {
        if (item.name === name) {
          item.count--;
          totalPrice = totalPrice - item.price;
          totalCount--;
        } 
        return item;
      }).filter(item => item.count > 0);
      return {cartItems: updatedCartItems, totalPrice, totalCount};
    case ADD_NEW_ITEM:
      updatedCartItems = cartItems;
      if (updatedCartItems.some(item => item.name === name)) {
        updatedCartItems = updatedCartItems.map(item => {
          if (item.name === name) {
            item.count++;
          }
          return item;
        })
      } else {
        updatedCartItems.push({name, price, count: 1});
      }
      totalPrice += price;
      totalCount++;
      return {cartItems: updatedCartItems, totalPrice, totalCount};
    case REMOVE_ALL_ITEMS:
      return {cartItems: [], totalPrice: 0, totalCount: 0};
    case REMOVE_CURRENT_ITEM:
      updatedCartItems = cartItems.filter(item => {
        if (item.name === name) {
          totalPrice -= item.price * item.count;
          totalCount -= item.count;
          return false;
        }
        return true;
      })
      return {cartItems: updatedCartItems, totalPrice, totalCount};
    default:
      return state;
  }
}

export default cart;