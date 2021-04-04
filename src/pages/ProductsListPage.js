import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList/ProductsList';
import { getProducts } from '../redux/products/actions';
import { addNewItem } from '../redux/cart/actions';

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
  productsList: state.products.productsList
});

export default connect(mapStateToProps, {getProducts, addNewItem})(ProductsListPage)