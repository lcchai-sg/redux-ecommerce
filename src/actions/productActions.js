import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from './types';

export const fetchProducts = () => (dispatch) => {
  fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};

export const filterProducts = (items, sort, size) => (dispatch) => {
  const products = [...items];
  if (sort !== '') {
    products.sort((a, b) =>
      (sort === 'lowest') ?
        (a.price > b.price ? 1 : -1) :
        (a.price < b.price ? 1 : -1));
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }

  return dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      items: size === '' ? products : products.filter(a =>
        a.availableSizes.indexOf(size) >= 0
      ),
      size,
    },
  });
};

export const sortProducts = (items, sort) => (dispatch) => {
  const products = [...items];
  if (sort !== '') {
    products.sort((a, b) =>
      (sort === 'lowest') ?
        (a.price > b.price ? 1 : -1) :
        (a.price < b.price ? 1 : -1));
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }

  return dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: { sort, items: products, },
  });
};

