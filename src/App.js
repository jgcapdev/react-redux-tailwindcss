import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initPokemons } from './redux/actions/pokemons/actions.js';
import pokemonService from './services/pokemons.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    pokemonService.getAll().then(
      (pokemons) => {
        dispatch(initPokemons(pokemons.results));
      },
      [dispatch]
    );
  });
  return;
}

export default App;
