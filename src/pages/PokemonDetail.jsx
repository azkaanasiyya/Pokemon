import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPokemonDetail } from '../services/Api';

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemonDetail(id);
      setPokemon(data);
    };
    fetchPokemon();
  }, [id]);

  if (!pokemon) return <p className="mt-6 text-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-orange-50 text-center">
      <div className="container mx-auto flex max-w-[1200px] flex-col items-center gap-8 p-8">
        <h1 className="text-4xl font-bold capitalize text-yellow-950">{pokemon?.name}</h1>
        <img src={pokemon?.image} alt={pokemon?.name} className="h-40 w-40" />
        <div className="flex flex-row items-center gap-2">
          <p className="rounded-full font-semibold bg-yellow-800 px-4 py-2 text-sm text-white">Height: {pokemon?.height}</p>
          <p className="rounded-full font-semibold bg-yellow-600 px-4 py-2 text-sm text-white">Weight: {pokemon?.weight}</p>
        </div>

        <div className="items-center flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-xl font-semibold text-yellow-950">Types:</h2>
            <div className="flex gap-2">
              {pokemon.types.map((t, index) => (
                <span key={index} className="rounded-md border border-yellow-800 bg-yellow-100 p-1 text-sm">
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-xl font-semibold text-yellow-950">Abilities:</h2>
            <div className="flex gap-2">
              {pokemon.abilities.map((a, index) => (
                <span key={index} className="brounded-md rounded-md border border-yellow-800 bg-yellow-100 p-1 text-sm">
                  {a.ability.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-xl font-semibold text-yellow-950">Stats:</h2>
            <div className="flex flex-row gap-4">
              {pokemon.stats &&
                pokemon.stats.map((s, index) => (
                  <div key={index} className="flex gap-1 rounded-md border border-yellow-800 bg-yellow-100 p-1 text-sm">
                    <span className="capitalize">{s.stat.name}</span>
                    <span className="font-semibold">{s.base_stat}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="text-md rounded-md bg-orange-950 px-4 py-2 font-bold text-white">
        Back
      </button>
    </div>
  );
}
