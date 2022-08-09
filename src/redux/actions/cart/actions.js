import { ADD_TO_CART, DELETE_FROM_CART } from './actionTypes.js';

export const addToCart = (content) => {
  return {
    type: ADD_TO_CART,
    payload: {
      content,
    },
  };
};

export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
};
