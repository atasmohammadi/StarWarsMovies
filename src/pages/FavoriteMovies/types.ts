import type { Movie as MovieType, People } from '../Home/types';

export type Movie = MovieType

export interface FavoriteMoviesScreenPropsType {
  movies: Array<Movie>;
  peoples: Array<People>;
  navigation: {
    navigate: (page: string, props?: {}) => void;
  };
}

export interface InitialStateType {
  movies: Array<Movie>
}