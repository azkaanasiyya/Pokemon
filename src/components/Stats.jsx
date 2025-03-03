/* eslint-disable react/prop-types */
export default function Stats({ stats }) {
    return (
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-semibold text-yellow-950">Stats:</h2>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {stats?.map((stat, index) => (
            <div key={index} className="flex gap-1 rounded-md border border-yellow-800 bg-yellow-100 p-1 text-sm">
              <span className="capitalize">{stat.stat.name}</span>
              <span className="font-semibold">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  