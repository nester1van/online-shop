import React from 'react';

export default function CartItem({ name, price, count,
removeCurrentItem, incrementItemCount, decrementItemCount }) {

  return (
    <div className="cart-item">
      <div className="cart-item__name">{name}</div>
      <div className="cart-item__price">${price}</div>
      <button className="cart-item__dec-btn" onClick={() => decrementItemCount(name)}>-</button>
      <span className="cart-item__count">{count}</span>
      <button className="cart-item__inc-btn" onClick={() => incrementItemCount(name)}>+</button>
      <button className="cart-item__remove-btn" onClick={() => removeCurrentItem(name)}>&#10005;</button>
    </div>
  )
}