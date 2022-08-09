import { composeWithDevTools } from 'redux-devtools-extension';

import { pokemonReducer } from './redux/reducers/pokemonReducer.js';
import { cartReducer } from './redux/reducers/cartReducer.js';

import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  pokemons: pokemonReducer,
  cart: cartReducer,
});

export const store = createStore(reducer, composeWithDevTools());
