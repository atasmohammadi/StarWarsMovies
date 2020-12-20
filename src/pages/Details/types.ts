import type { Movie, People } from '../Home/types';

export interface DetailsScreenPropsType {
  route: {
      params: {
          movie: Movie,
          characters: Array<People>,
      }
  },
  navigation: {
    navigate: (page: string, props?: {}) => void;
  };
}
