import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList/ProductsList';
import { getProducts } from '../redux/products/actions';
import { addNewItem } from '../redux/cart/actions';
import { productsListSelector } from '../redux/products/selectors';

function ProductsListPage({ productsList, getProducts, addNewItem }) {

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>Products list</h1>
      <ProductsList productsList={productsList} addNewItem={addNewItem}/>
    </>
  )
}

const mapStateToProps = (state) => ({
  productsList: productsListSelector(state)
});

export default connect(mapStateToProps, {getProducts, addNewItem})(ProductsListPage)