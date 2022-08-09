import { POKEMONS_INIT } from '../actions/pokemons/actionTypes.js';

export const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case POKEMONS_INIT:
      return state.concat(action.payload);
    default:
      return state;
  }
};
