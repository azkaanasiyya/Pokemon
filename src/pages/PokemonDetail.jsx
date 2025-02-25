import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../services/Api";

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemonDetail(id);
      setPokemon(data);
    };
    fetchPokemon();
  }, [id]);

  if (!pokemon) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
      <img 
        src={pokemon.sprites?.front_default} 
        alt={pokemon.name} 
        className="w-40 h-40 mt-4"
      />
      <p className="text-lg mt-2">Height: {pokemon.height} | Weight: {pokemon.weight}</p>
      <h2 className="text-2xl font-semibold mt-4">Types:</h2>
      <div className="flex gap-2 mt-2">
        {pokemon.types.map((t, index) => (
          <span key={index} className="bg-gray-200 px-3 py-1 rounded-md">
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
