const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getPokemonList = async (limit = 12, offset = 0) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) throw new Error('Failed to fetch Pokémon list');

    const data = await response.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const detailResponse = await fetch(pokemon.url);
        const detailData = await detailResponse.json();

        return {
          id: detailData.id,
          name: detailData.name,
          height: detailData.height,
          weight: detailData.weight,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${detailData.id}.svg`,
        };
      }),
    );

    return { results: pokemonDetails, count: data.count };
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPokemonDetail = async (identifier) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${identifier}`);
    if (!response.ok) throw new Error(`Failed to fetch Pokémon: ${identifier}`);

    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types,
      abilities: data.abilities,
      stats: data.stats,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
