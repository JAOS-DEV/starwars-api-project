export interface InitialApiTypes {
  data?: string | undefined;
  films?: string;
  people?: string;
  planets?: string;
  species?: string;
  starships?: string;
  vehicles?: string;
}

export type PeopleTypes = {
  birth_year?: string;
  created?: string;
  edited?: string;
  eye_color?: string;
  fiilms?: string[];
  gender?: string;
  hair_color?: string;
  height?: string;
  home_world?: string;
  mass?: string;
  name?: string;
  skin_color?: string;
  species?: string[];
  starships?: string[];
  url?: string;
  vehicles?: string[];
};

export type FilmTypes = {
  title?: string;
  episode_id?: number;
  opening_crawl?: string;
  director?: string;
  producer?: string;
  release_date?: string;
  characters?: string[];
  planets?: string[];
  starships?: string[];
  vehicles?: string[];
  species?: string[];
  created?: string;
  edited?: string;
  url?: string;
};

export type StarshipTypes = {
  MGLT?: string;
  cargo_capacity?: string;
  consumables?: string;
  cost_in_credits?: string;
  created?: string;
  crew?: string;
  edited?: string;
  films?: string[];
  hyperdrive_rating?: string;
  length?: string;
  manufacturer?: string;
  max_atmosphering_speed?: string;
  model?: string;
  name?: string;
  passengers?: string;
  pilots?: string[];
  starship_class?: string;
  url?: string;
};

export type VehicleTypes = {
  cargo_capacity?: string;
  consumables?: string;
  cost_in_credits?: string;
  created?: string;
  crew?: string;
  edited?: string;
  films?: string[];
  length?: string;
  manufacturer?: string;
  max_atmosphering_speed?: string;
  model?: string;
  name?: string;
  passengers?: string;
  pilots?: string[];
  url?: string;
  vehicle_class?: string;
};

export type SpeciesTypes = {
  average_height?: string;
  average_lifespan?: string;
  classification?: string;
  created?: string;
  designation?: string;
  edited?: string;
  eye_colors?: string;
  films?: string[];
  hair_colors?: string;
  homeworld?: string;
  language?: string;
  name?: string;
  people?: string[];
  skin_colors?: string;
  url?: string;
  type?: 'species';
};

export type PlanetTypes = {
  climate?: string;
  created?: string;
  diameter?: string;
  edited?: string;
  films?: string[];
  gravity?: string;
  name?: string;
  orbital_period?: string;
  population?: string;
  residents?: string[];
  rotation_period?: string;
  surface_water?: string;
  terrain?: string;
  url?: string;
  type?: 'planet';
};

export enum StarWarsSelectTypes {
  people = 'people',
  films = 'films',
  starships = 'starships',
  vehicles = 'vehicles',
  species = 'species',
  planets = 'planets',
}

export type ApiResultsTypes = PeopleTypes[] | FilmTypes[] | StarshipTypes[] | VehicleTypes[] | SpeciesTypes[] | PlanetTypes[];

export interface StarwarsApiTypes extends InitialApiTypes {
  count: number;
  next: string | null;
  previous: string | null;
  // results: ApiResultsTypes[];
  results?: any[];
}
