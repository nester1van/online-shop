import React from 'react';

export default function ProductsList({ name, price, imageUrl, addNewItem }) {

  const url =  `https://murmuring-tor-81614.herokuapp.com/${imageUrl}` 

  return (
    <div className="product-item">
    <img className="product-item__image"src={url} alt={name}/>
    <div className="product-item__name">{name}</div>
    <div className="product-item__price">${price}</div>
    <button className="product-item__add-to-cart-btn" onClick={() => addNewItem(name, price)}>Add to cart</button>
    </div>
  )
}