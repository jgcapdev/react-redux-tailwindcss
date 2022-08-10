import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initPokemons } from '../redux/actions/pokemons/actions.js';
import pokemonService from '../services/pokemons.js';

import BaseTitle from './UI/BaseTitle.js';

const PokemonsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    pokemonService.getAll().then(
      (pokemons) => {
        dispatch(initPokemons(pokemons.results));
      },
      [dispatch]
    );
  });

  return (
    <div>
      <BaseTitle title="Pokemons List" />
    </div>
  );
};

export default PokemonsList;
