import axios from 'axios';

const remote = axios.create();

export interface PokemonListResponseType {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
}

export const fetchPokemons = async (next?: string) => {
  const reauestURL = next ? next : 'https://pokeapi.co/api/v2/pokemon';

  const response = await remote.get<PokemonListResponseType>(reauestURL);

  return response.data;
};

interface PokemonDetailResponseType {
  id: number;
  weight: number;
  height: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

interface PokemonSpeciesResponseType {
  color: {
    name: string;
  };
  names: {
    name: string;
    language: {
      name: string;
    };
  }[];
}

export interface PokemonDetailType {
  id: number;
  weight: number;
  height: number;
  name: string;
  koreanName: string;
  color: string;
  types: string[];
  images: {
    frontDefault: string;
    dreamworldFront: string;
    officialArtworkFront: string;
  };
  baseStats: {
    name: string;
    value: number;
  }[];
}

export const fetchpokemonDetail = async (
  name: string,
): Promise<PokemonDetailType> => {
  const pokemontdetailURL = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const pokemontSpeciesURL = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
  const speciesResponse = await remote.get<PokemonSpeciesResponseType>(
    pokemontSpeciesURL,
  );
  const response = await remote.get<PokemonDetailResponseType>(
    pokemontdetailURL,
  );
  const detail = response.data;
  const species = speciesResponse.data;

  const koreanName =
    species.names.find((item) => {
      return item.language.name === 'ko';
    })?.name ?? detail.name;

  return {
    id: detail.id,
    name: detail.name,
    color: species.color.name,
    koreanName: koreanName,
    height: detail.height / 10,
    weight: detail.weight / 10,
    types: detail.types.map((item) => item.type.name),
    images: {
      frontDefault: detail.sprites.front_default,
      dreamworldFront: detail.sprites.other.dream_world.front_default,
      officialArtworkFront:
        detail.sprites.other['official-artwork'].front_default,
    },
    baseStats: detail.stats.map((item) => {
      return {
        name: item.stat.name,
        value: item.base_stat,
      };
    }),
  };
};
