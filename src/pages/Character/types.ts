import type { Movie, People } from '../Home/types';

export interface CharacterScreenPropsType {
  route: {
      params: {
          character: People,
          movies: Array<Movie>,
          favoriteCharacters: Array<People>,
          addFavoriteCharacter: (character: People) => void,
          removeFavoriteCharacter: (character: People) => void,
      }
  }
}
