import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonList } from '../services/Api';
import Header from '../components/Header';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPokemons, setTotalPokemons] = useState(0);
  const limit = 12;
  const totalPages = Math.ceil(totalPokemons / limit);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const fetchPokemons = async () => {
    const offset = (page - 1) * limit;
    const {results, count} = await getPokemonList(limit, offset);
    setPokemons(results);
    setTotalPokemons(count);
  };

  // useEffect(() => {
  //   console.log(totalPokemons.length, 'ini');
  // }, [totalPokemons]);

  return (
    <div className="min-h-screen bg-orange-50">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto flex max-w-[1200px] flex-col gap-[50px] p-4 md:p-[50px]">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {pokemons
            .filter((pokemon) => pokemon?.name?.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((pokemon) => (
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
            ))}
        </div>

        <div className=" flex items-center justify-center space-x-4">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className={`rounded-lg px-5 py-2 font-bold text-white transition ${
              page === 1 ? 'cursor-not-allowed bg-yellow-200' : 'bg-yellow-600 hover:bg-yellow-200'
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
              page === totalPages ? 'cursor-not-allowed bg-primary-400' : 'bg-blue-600 hover:bg-primary-400'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
