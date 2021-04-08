import React from 'react';
import { connect } from 'react-redux';
import { removeAllItems, removeCurrentItem, incrementItemCount, decrementItemCount } from '../redux/cart/actions';
import CartList from '../components/Cart/CartList';
import { cartItemsSelector, totalPriceSelector } from '../redux/cart/selectors';

function CartPage({ cartItems, totalPrice, 
  removeAllItems, removeCurrentItem, incrementItemCount, decrementItemCount }) {

  return (
    <>
      <h1>Cart</h1>
      <CartList cartItems={cartItems} totalPrice={totalPrice} 
        removeAllItems={removeAllItems} removeCurrentItem={removeCurrentItem} 
        incrementItemCount={incrementItemCount} decrementItemCount={decrementItemCount}/>
    </>
  )
}

const mapStateToProps = (state) => ({
  cartItems: cartItemsSelector(state),
  totalPrice: totalPriceSelector(state)
});

export default connect(mapStateToProps, 
  {removeAllItems, removeCurrentItem, incrementItemCount, decrementItemCount})(CartPage)