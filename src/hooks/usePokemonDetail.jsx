import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../services/Api";

export default function usePokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const data = await getPokemonDetail(id);
      setPokemon(data);
      setLoading(false);
    };

    fetchPokemon();
  }, [id]);

  return { pokemon, loading };
}
