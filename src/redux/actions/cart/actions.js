import { ADD_TO_CART, DELETE_FROM_CART } from './actionTypes.js';

export const addToCart = (content) => {
  return {
    type: ADD_TO_CART,
    payload: {
      content,
    },
  };
};

export const deleteFromCart = (pokemon) => {
  return {
    type: DELETE_FROM_CART,
    payload: pokemon,
  };
};
