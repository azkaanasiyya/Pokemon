import PropTypes from 'prop-types';
import logo from '../assets/logo header.svg';

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-7 p-5 md:p-10 md:flex-row md:gap-0">
      <img src={logo} alt="logo header" className="h-[73.36px] w-52" />
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search Pokémon"
          className="rounded-full border-4 border-yellow-700 bg-orange-50 text-sm"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
