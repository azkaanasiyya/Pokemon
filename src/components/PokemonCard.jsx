/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function PokemonCard({ name, image, id }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img src={image} alt={name} className="w-24 h-24" />
      <h3 className="text-lg font-semibold capitalize">{name}</h3>
      <Link to={`/pokemon/${id}`} className="text-blue-500 mt-2">View Details</Link>
    </div>
  );
}
