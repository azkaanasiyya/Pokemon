import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const limit = 12;
  const totalPages = Math.ceil(1000 / limit);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
      setPokemons(response.data.results);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const startIndex = (page - 1) * limit;
  const displayedPokemons = filteredPokemons.slice(startIndex, startIndex + limit);

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto max-w-[1200px] p-3 md:p-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {displayedPokemons.map((pokemon) => {
            const pokemonId = pokemon.url.split('/')[6];
            return (
              <Link
                key={pokemonId}
                to={`/pokemon/${pokemonId}`}
                className="rounded-xl border p-4 text-center shadow-lg transition-transform hover:scale-105"
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                  alt={pokemon.name}
                  className="mx-auto h-28 w-28"
                  onError={(e) =>
                    (e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`)
                  }
                />

                <p className="mt-3 text-lg font-bold capitalize text-neutral-500">{pokemon.name}</p>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className={`rounded-lg px-5 py-2 font-bold text-white transition ${
              page === 1 ? 'cursor-not-allowed bg-gray-400' : 'bg-primary-500 hover:bg-primary-400'
            }`}
          >
            Prev
          </button>

          <span className="text-lg font-semibold text-neutral-500">
            {page} / {totalPages}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className={`rounded-lg px-5 py-2 font-bold text-white transition ${
              page === totalPages ? 'cursor-not-allowed bg-gray-400' : 'bg-primary-500 hover:bg-primary-400'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
