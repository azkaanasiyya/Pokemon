import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header"; 

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const limit = 12;
  const totalPages = Math.ceil(1000 / limit);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000");
      setPokemons(response.data.results);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (page - 1) * limit;
  const displayedPokemons = filteredPokemons.slice(startIndex, startIndex + limit);

  return (
    <div className="container max-w-[1200px] mx-auto">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedPokemons.map((pokemon) => {
          const pokemonId = pokemon.url.split("/")[6];
          return (
            <Link
              key={pokemonId}
              to={`/pokemon/${pokemonId}`}
              className="border rounded-lg p-4 text-center bg-white shadow-lg"
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                alt={pokemon.name}
                className="w-24 h-24 mx-auto"
                onError={(e) =>
                  (e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`)
                } 
              />
              <p className="mt-2 font-medium">{pokemon.name.toUpperCase()}</p>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={`px-4 py-2 font-bold text-white rounded ${
            page === 1 ? "bg-gray-400" : "bg-gray-600 hover:bg-gray-700"
          }`}
        >
          Prev
        </button>

        <span className="text-lg font-semibold">
          {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className={`px-4 py-2 font-bold text-white rounded ${
            page === totalPages ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
