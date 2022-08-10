import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import pokemonService from '../services/pokemons.js';

import BaseTitle from './UI/BaseTitle';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.length !== 0) {
      const fetchData = () => {
        return cart.map((c) => {
          return pokemonService.pokemonDetail(c.content.name).then((pk) => pk);
        });
      };
      Promise.all(fetchData()).then((data) => {
        setPokemons(pokemons.concat(data));
      });
    }
  }, [cart]);

  return (
    <div>
      <BaseTitle title="Welcome to React, Redux, Tailwind CSS - Pokestore" />

      {pokemons.length === 0 ? (
        <BaseTitle title="There are no Pokemons at the moment" />
      ) : (
        <div className="columns-3">
          {pokemons.map((poke) => (
            <img key={poke.id} className="w-full aspect-square" src={poke.sprites.front_default} alt={poke.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
