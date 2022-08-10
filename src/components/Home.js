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
        return cart.map((elem) => {
          return pokemonService.pokemonDetail(elem.content.name).then((poke) => poke);
        });
      };
      Promise.all(fetchData()).then((poke) => {
        setPokemons(pokemons.concat(poke));
      });
    }
  }, [cart]);

  return (
    <div>
      <BaseTitle title="Welcome to React, Redux, Tailwind CSS - Pokestore" />

      {pokemons.length === 0 ? (
        <BaseTitle title="There are no Pokemons at the moment" />
      ) : (
        <>
          <h2 className="text-center text-2xl font-bold">Your Pokemons in the cart are: </h2>
          <div className="columns-3 text-center">
            {pokemons.map((poke) => (
              <img key={poke.id} className="aspect-square mx-auto" src={poke.sprites.front_default} alt={poke.name} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
