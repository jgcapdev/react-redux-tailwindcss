import axios from 'axios';
const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const pokemonDetail = async (name) => {
  const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return request.data;
};

export default { getAll, pokemonDetail };
