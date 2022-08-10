import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import pokemonService from '../services/pokemons.js';
import PokemonCard from './PokemonCard.js';
import BaseTitle from './UI/BaseTitle.js';

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    pokemonService.pokemonDetail(name).then((res) => {
      setPokemon(res);
    });
  }, []);

  return (
    <div>
      <BaseTitle title={`Pokemon details for ${pokemon.name}`} />

      <PokemonCard pokemon={pokemon} />

      <div className="text-center my-4">
        <Link to="/cart" className="link--button">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetails;
