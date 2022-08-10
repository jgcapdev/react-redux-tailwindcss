import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initPokemons } from '../redux/actions/pokemons/actions.js';
import pokemonService from '../services/pokemons.js';

import BaseTitle from './UI/BaseTitle.js';

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

      <div className="mx-24">
        <table className="table-auto text-center w-full">
          <thead className="border-b">
            <tr>
              <th className="text-gray-900 px-6 py-4">Pokemon</th>
              <th className="text-gray-900 px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon) => {
              return (
                <tr className="py-4 border-b" key={pokemon.name}>
                  <td className="py-2">{pokemon.name}</td>
                  <td className="py-2">
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Add
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PokemonsList;
