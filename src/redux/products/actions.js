// action types
export const GET_PRODUCTS_REQ = 'GET_PRODUCTS_REQ';
export const GET_PRODUCTS_RES = 'GET_PRODUCTS_RES';
export const GET_PRODUCTS_ERR = 'GET_PRODUCTS_ERR';

// action creators
const getProductsReq = () => ({
  type: GET_PRODUCTS_REQ,
  isFetching: true
});

const getProductsRes = (productsList) => ({
  type: GET_PRODUCTS_RES,
  isFetching: false,
  status: 'success',
  productsList
});

const getProductsErr = () => ({
  type: GET_PRODUCTS_ERR,
  isFetching: false,
  status: 'error'
});
  
let dealers = window.dealers || [];
let query = dealers.length ? `?dealers=${dealers.join(',')}` : '';
let url =  `https://murmuring-tor-81614.herokuapp.com/api/goods/${query}`;

// async action creators
export const getProducts = () => (dispatch) => {
  dispatch(getProductsReq());
  return fetch(url)
    .then(res => res.json())
    .then(json => dispatch(getProductsRes(json)))
    .catch(err => dispatch(getProductsErr()));
}