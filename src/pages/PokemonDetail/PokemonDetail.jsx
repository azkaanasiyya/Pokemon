import { useNavigate } from 'react-router-dom';
import usePokemonDetail from '../../hooks/usePokemonDetail';
import Types from '../../components/Types';
import Abilities from '../../components/Abilities';
import Stats from '../../components/Stats';
import { ClipLoader } from 'react-spinners';

export default function PokemonDetail() {
  const { pokemon, loading } = usePokemonDetail();
  const navigate = useNavigate();

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center bg-orange-50">
        <ClipLoader color="#a16207" size={50} />
      </div>
    );

  return (
    <div className="min-h-screen bg-orange-50 text-center">
      <div className="container mx-auto flex max-w-[1200px] flex-col items-center gap-8 p-5 md:p-8">
        <h1 className="text-4xl font-bold capitalize text-yellow-950">{pokemon?.name}</h1>
        <img src={pokemon?.image} alt={pokemon?.name} className="h-40 w-40" />
        <div className="flex flex-row items-center gap-2">
          <p className="rounded-full bg-yellow-800 px-4 py-2 text-sm font-semibold text-white">
            Height: {pokemon?.height}
          </p>
          <p className="rounded-full bg-yellow-600 px-4 py-2 text-sm font-semibold text-white">
            Weight: {pokemon?.weight}
          </p>
        </div>

        <Types types={pokemon?.types} />
        <Abilities abilities={pokemon?.abilities} />
        <Stats stats={pokemon?.stats} />

        <button
          onClick={() => navigate(-1)}
          className="text-md rounded-md bg-orange-950 px-4 py-2 font-bold text-white hover:bg-orange-800"
        >
          Back
        </button>
      </div>
    </div>
  );
}
