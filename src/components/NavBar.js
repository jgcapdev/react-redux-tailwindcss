import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="flex flex-row justify-center text-center py-4 text-lg bg-teal-500">
      <NavLink className="text-teal-200 hover:text-white basis-1/4" to="/">
        Home
      </NavLink>
      <NavLink className="text-teal-200 hover:text-white basis-1/4" to="/pokemons">
        Pokemons
      </NavLink>
      <NavLink className="text-teal-200 hover:text-white basis-1/4" to="/cart">
        Cart
      </NavLink>
    </ul>
  );
};

export default NavBar;
