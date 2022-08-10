import { Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';
import PokemonsList from './components/PokemonsList.js';
import Cart from './components/Cart.js';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<PokemonsList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
