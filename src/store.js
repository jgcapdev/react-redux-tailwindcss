import { composeWithDevTools } from 'redux-devtools-extension';

import { pokemonReducer } from './redux/reducers/pokemonReducer.js';

import { createStore } from 'redux';

export const store = createStore(pokemonReducer, composeWithDevTools());
