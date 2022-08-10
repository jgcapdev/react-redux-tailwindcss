import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import pokemonService from '../services/pokemons.js';

import BaseTitle from './UI/BaseTitle';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.length !== 0) {
      cart.forEach((c) => {
        pokemonService.pokemonDetail(c.content.name).then((pk) => {
          setPokemons(pokemons.concat(pk));
        });
      });
    }
  }, [cart]);

  return (
    <div>
      <BaseTitle title="Welcome to React, Redux, Tailwind CSS - Pokestore" />

      {console.log(pokemons)}
    </div>
  );
};

export default Home;
