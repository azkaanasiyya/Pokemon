import PropTypes from 'prop-types';

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex max-w-[1200px] mx-auto items-center justify-between p-3 md:p-10">
      <h1 className="text-2xl font-bold text-neutral-500 md:text-4xl">Pokédex</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        className="rounded-lg border p-2 text-sm"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
}

Header.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
