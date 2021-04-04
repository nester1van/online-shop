import { GET_PRODUCTS_REQ, GET_PRODUCTS_RES, GET_PRODUCTS_ERR } from './actions';

const initialProducts = {
  isFetching: false,
  status: 'success',
  productsList: []
};

const products = (state = initialProducts, action) => {
  const { type, isFetching, status, productsList } = action;
  switch (type) {
    case GET_PRODUCTS_REQ:
      return ({...state, isFetching});
    case GET_PRODUCTS_RES:
      return ({isFetching, status, productsList});
    case GET_PRODUCTS_ERR:
      return ({...state, isFetching, status});
    default:
      return state;
  }
}

export default products;