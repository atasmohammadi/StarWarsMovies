export interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  created: Date;
  edited: Date;
  url: string;
}

export interface People {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  url: string;
  created: string;
  edited: string;
}

export interface Starship {
  MGLT: string;
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: Date;
  crew: number;
  edited: Date;
  hyperdrive_rating: number;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: number;
  films: Array<string>;
  pilots: Array<string>;
  starship_class: string;
  url: string;
}

export interface Vehicle {
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: Date;
  crew: number;
  edited: Date;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: number;
  model: string;
  name: string;
  passengers: number;
  pilots: Array<string>;
  films: Array<string>;
  url: string;
  vehicle_class: string;
}

export interface Species {
  average_height: number;
  average_lifespan: number;
  classification: string;
  created: Date;
  designation: string;
  edited: Date;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: Array<string>;
  films: Array<string>;
  skin_colors: string;
  url: string;
}

export interface Planet {
  climate: string;
  created: Date;
  diameter: number;
  edited: Date;
  films: Array<string>;
  gravity: number;
  name: string;
  orbital_period: number;
  population: number;
  residents: Array<string>;
  rotation_period: number;
  surface_water: number;
  terrain: string;
  url: string;
}

export interface HomeScreenPropsType {
  navigation: {
    navigate: () => void;
  };
  loadMovies: (query?: string, page?: number) => void;
  movies: Movie[];
  count: number;
  error: boolean;
  success: boolean;
  loading: boolean;
}
