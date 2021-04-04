import React from 'react';
import { connect } from 'react-redux';
import { removeAllItems, removeCurrentItem, incrementItemCount, decrementItemCount } from '../redux/cart/actions';
import CartList from '../components/Cart/CartList';

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
  cartItems: state.cart.cartItems,
  totalPrice: state.cart.totalPrice
});

export default connect(mapStateToProps, 
  {removeAllItems, removeCurrentItem, incrementItemCount, decrementItemCount})(CartPage)