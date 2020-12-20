import type { People as PeopleType } from '../Home/types';

export type People = PeopleType

export interface FavoriteCharactersScreenPropsType {
  characters: Array<People>;
  navigation: {
    navigate: (page: string, props?: {}) => void;
  };
}

export interface InitialStateType {
  characters: Array<People>
}