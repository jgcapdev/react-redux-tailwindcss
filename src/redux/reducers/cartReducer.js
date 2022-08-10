import { ADD_TO_CART, DELETE_FROM_CART } from '../actions/cart/actionTypes.js';

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const isPokemon = state.some((pk) => pk.content.name === action.payload.content.name);

      if (!isPokemon) {
        return [...state, action.payload];
      }
      break;

    case DELETE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
