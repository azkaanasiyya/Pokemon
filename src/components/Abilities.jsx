/* eslint-disable react/prop-types */
export default function Abilities({ abilities }) {
    return (
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-semibold text-yellow-950">Abilities:</h2>
        <div className="flex gap-2">
          {abilities?.map((ability, index) => (
            <span key={index} className="rounded-md border border-yellow-800 bg-yellow-100 p-1 text-sm">
              {ability.ability.name}
            </span>
          ))}
        </div>
      </div>
    );
  }
  