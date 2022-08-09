import { POKEMONS_INIT } from './actionTypes.js';

export const initPokemons = (pokemons) => {
  return {
    type: POKEMONS_INIT,
    payload: pokemons,
  };
};
