// action types
export const INCREMENT_ITEM_COUNT = 'INCREMENT_ITEM_COUNT';
export const DECREMENT_ITEM_COUNT = 'DECREMENT_ITEM_COUNT';
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const REMOVE_ALL_ITEMS = 'REMOVE_ALL_ITEMS';
export const REMOVE_CURRENT_ITEM = 'REMOVE_CURRENT_ITEM';

// action creators
export const incrementItemCount = (name) => ({
  type: INCREMENT_ITEM_COUNT,
  name
});

export const decrementItemCount = (name) => ({
  type: DECREMENT_ITEM_COUNT,
  name
});

export const addNewItem = (name, price) => ({
  type: ADD_NEW_ITEM,
  name,
  price
});

export const removeAllItems = () => ({
  type: REMOVE_ALL_ITEMS
});

export const removeCurrentItem = (name) => ({
  type: REMOVE_CURRENT_ITEM,
  name
});
