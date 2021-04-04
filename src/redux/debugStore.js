import { getProducts } from './products/actions';
import { incrementItemCount, deccrementItemCount, addNewItem, 
         removeAllItems, removeCurrentItem } from './cart/actions';

const debugStore = (store, isDebugging) => {
  if (isDebugging) {

    store.subscribe(() => console.log(store.getState()));
  }
  // products
  // store.dispatch(getProducts());

  // cart
  // store.dispatch(addNewItem('First', 10));
  // store.dispatch(addNewItem('Second', 5))
  // store.dispatch(addNewItem('Third', 3));
  // store.dispatch(incrementItemCount('Third'));
  // store.dispatch(incrementItemCount('Third'));
  // store.dispatch(deccrementItemCount('First'));
  // store.dispatch(removeCurrentItem('Third'));
  // store.dispatch(removeAllItems());
};

export default debugStore;