import { createSelector } from 'reselect';

export const cartItemsSelector = state => state.cart.cartItems;

export const totalCountSelector = createSelector(
  cartItemsSelector,
  items => items.reduce((totalCount, item) => totalCount + item.count, 0)
);

export const totalPriceSelector = createSelector(
  cartItemsSelector,
  items => items.reduce((totalPrice, item) => totalPrice + (item.price * item.count), 0)
)
