import PokemonCard from './PokemonCard';
import PropTypes from 'prop-types';

export default function PokemonList({ pokemons, searchTerm }) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {pokemons
        .filter((pokemon) => pokemon?.name?.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((pokemon) => (
          <PokemonCard key={pokemon?.id} pokemon={pokemon} />
        ))}
    </div>
  );
}

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
};
