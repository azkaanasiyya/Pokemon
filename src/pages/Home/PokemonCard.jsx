import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function PokemonCard({ pokemon }) {
  return (
    <Link
      key={pokemon?.id}
      to={`/pokemon/${pokemon?.id}`}
      className="rounded-3xl border-8 border-yellow-700 bg-yellow-50 p-2 shadow-lg transition-transform hover:scale-105 md:p-4"
    >
      <p className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-900 text-lg font-bold text-white">
        {pokemon?.id}
      </p>

      <img
        src={pokemon?.image}
        alt={pokemon?.name}
        className="mx-auto h-28 w-28"
        onError={(e) =>
          (e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`)
        }
      />

      <p className="mt-3 text-lg font-bold capitalize text-neutral-500">{pokemon?.name}</p>
      <div className="flex flex-row justify-between">
        <p className="text-sm font-semibold text-blue-600">Height: {pokemon?.height}</p>
        <p className="text-sm font-semibold text-yellow-600">Weight: {pokemon?.weight}</p>
      </div>
    </Link>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
