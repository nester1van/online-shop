import React from 'react';
import CartItem from './CartItem';

export default function CartList({ cartItems, totalPrice, 
  removeAllItems, removeCurrentItem, incrementItemCount, decrementItemCount }) {
  return(
    <>
      {cartItems.length ? 
      <div className="cart-list">
        {cartItems.map(item => {
        const { name, price, count } = item;
        return <CartItem key={name} name={name} price={price} 
        count={count} removeCurrentItem={removeCurrentItem} 
        incrementItemCount={incrementItemCount} decrementItemCount={decrementItemCount}/>
        })}
        <hr/>
        <div className="cart-list__total-price">
          <span className="cart-list__total-price-title">Total: </span>
          <span className="cart-list__total-price-value">${totalPrice.toFixed(2)}</span>
          </div>
        <button className="cart-list__remove-all-btn" onClick={removeAllItems}>remove all</button>
      </div>
      : 
      <div className="cart-list">Yout cart is empty</div>
    }
    </>
    
  )
}