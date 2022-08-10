import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initPokemons } from '../redux/actions/pokemons/actions.js';
import pokemonService from '../services/pokemons.js';

import BaseTitle from './UI/BaseTitle.js';
import BaseTable from './UI/BaseTable.js';

const PokemonsList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    if (pokemons.length === 0) {
      pokemonService.getAll().then((pokemons) => {
        dispatch(initPokemons(pokemons.results));
      });
    }
  }, [dispatch, pokemons.length]);

  return (
    <div>
      <BaseTitle title="Pokemons List" />

      <BaseTable data={pokemons} />
    </div>
  );
};

export default PokemonsList;
