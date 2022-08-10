const PokemonCard = ({ pokemon }) => {
  return (
    pokemon && (
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={pokemon.sprites.front_default}
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{pokemon.name.toUpperCase()}</h5>
            <p className="text-gray-700 text-base mb-4">
              Abilities:
              {Object.keys(pokemon.abilities).map((ab) => (
                <span key={ab}> {pokemon.abilities[ab].ability.name} </span>
              ))}
            </p>
            <p className="text-gray-600 text-xs">{`Weight: ${pokemon.weight} | height: ${pokemon.height}`}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default PokemonCard;
