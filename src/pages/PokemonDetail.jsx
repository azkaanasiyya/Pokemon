import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetail } from '../services/Api';

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

  if (!pokemon) return <p className="mt-6 text-center">Loading...</p>;

  return (
    <div className="container mx-auto flex max-w-[1200px] flex-col items-center gap-8 p-8">
      <h1 className="text-4xl font-bold capitalize text-neutral-500">{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} className="h-40 w-40" />
      <p className="text-lg">
        Height: {pokemon.height} | Weight: {pokemon.weight}
      </p>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-semibold">Types:</h2>
        <div className="flex gap-2">
          {pokemon.types.map((t, index) => (
            <span key={index} className="rounded-md bg-gray-200 px-3 py-1">
              {t.type.name}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-semibold">Abilities:</h2>
        <div className="flex gap-2">
          {pokemon.abilities.map((a, index) => (
            <span key={index} className="rounded-md bg-gray-200 px-3 py-1">
              {a.ability.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
