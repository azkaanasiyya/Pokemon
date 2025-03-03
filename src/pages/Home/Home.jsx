import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import PokemonList from './PokemonList';
import usePokemons from '../../hooks/usePokemons';

export default function Home() {
  const { pokemons, searchTerm, setSearchTerm, page, setPage, totalPages } = usePokemons();
  return (
    <div className="min-h-screen bg-orange-50">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto flex max-w-[1200px] flex-col gap-[50px] p-4 md:p-[50px]">
        <PokemonList pokemons={pokemons} searchTerm={searchTerm} />
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
