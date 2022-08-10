import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/actions/cart/actions';
import BaseButton from './BaseButton';

const BaseTable = ({ data, cartTable = false }) => {
  const dispatch = useDispatch();

  const addPokemon = (pokemon) => {
    dispatch(addToCart(pokemon));
  };

  const deletePokemon = (pokemon) => {
    dispatch(deleteFromCart(pokemon));
  };

  return (
    <div className="mx-24">
      <table className="table-auto text-center w-full">
        <thead className="border-b">
          <tr>
            <th className="text-gray-900 px-6 py-4">Pokemon</th>
            <th className="text-gray-900 px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pokemon) => {
            return (
              <tr className="py-4 border-b" key={pokemon.name || pokemon.content.name}>
                <td className="uppercase py-2">{pokemon.name || pokemon.content.name}</td>
                <td className="py-2">
                  <div>
                    {!cartTable ? (
                      <BaseButton
                        title="Add"
                        handleClick={() => {
                          addPokemon(pokemon);
                        }}
                      />
                    ) : (
                      <>
                        <BaseButton title="View Details" />
                        <BaseButton
                          title="Delete"
                          primary={false}
                          handleClick={() => {
                            deletePokemon(pokemon);
                          }}
                        />
                      </>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
