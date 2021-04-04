import React from 'react';
import ProductItem from './ProductItem';

export default function ProductsList({ productsList, addNewItem }) {

  return (
    <div className='products-list'>
      {productsList.map(item => {
        const { name, price, image } = item;
        return <ProductItem key={name} name={name} price={price} imageUrl={image} addNewItem={addNewItem}/>
      })}
    </div>
  )
}