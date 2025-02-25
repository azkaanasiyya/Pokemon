import PropTypes from "prop-types";

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-between items-center px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800">Pokédex</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        className="border rounded-lg p-2 text-sm"
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
