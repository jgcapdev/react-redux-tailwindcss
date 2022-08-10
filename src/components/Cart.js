import { useSelector } from 'react-redux';
import BaseTable from './UI/BaseTable.js';

import BaseTitle from './UI/BaseTitle.js';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <BaseTitle title="Cart" />

      {cart.length === 0 ? <BaseTitle title="There are no pokemons in the cart" /> : <BaseTable data={cart} cartTable />}
    </div>
  );
};

export default Cart;
