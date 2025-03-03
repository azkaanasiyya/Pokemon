/* eslint-disable react/prop-types */
export default function Types({ types }) {
    return (
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-semibold text-yellow-950">Types:</h2>
        <div className="flex gap-2">
          {types?.map((type, index) => (
            <span key={index} className="rounded-md border border-yellow-800 bg-yellow-100 p-1 text-sm">
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    );
  }
  