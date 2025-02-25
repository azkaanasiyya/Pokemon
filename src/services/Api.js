const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) throw new Error("Failed to fetch Pokémon list");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPokemonDetail = async (identifier) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${identifier}`);
    if (!response.ok) throw new Error(`Failed to fetch Pokémon: ${identifier}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
