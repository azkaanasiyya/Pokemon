/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { getPokemonList } from '../services/Api';

export default function usePokemons() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, allPokemons]);

  const fetchPokemons = async () => {
    const { results } = await getPokemonList(500, 0);
    setAllPokemons(results);
    setFilteredPokemons(results);
  };

  const handleSearch = () => {
    const filtered = allPokemons.filter((pokemon) =>
     pokemon?.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredPokemons(filtered);
    setPage(1);
  };

  const totalPages = Math.ceil(filteredPokemons.length / limit);

  const displayedPokemons = filteredPokemons.slice((page - 1) * limit, page * limit);

  return { pokemons: displayedPokemons, searchTerm, setSearchTerm, page, setPage, totalPages };
}