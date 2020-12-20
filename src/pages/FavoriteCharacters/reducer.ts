/*
 *
 * Favorite Characters reducer
 *
 */

import produce from 'immer';
import * as constants from './constants';
import type { InitialStateType } from './types';

export const initialState: InitialStateType = {
  characters: [],
};

/* eslint-disable default-case, no-param-reassign */
const favoriteCharactersReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.ADD_FAVORITE:
        if(!state.characters.find(m => m.name === action.payload.character.name)) draft.characters.push(action.payload.character);
        break;
      case constants.REMOVE_FAVORITE:
        draft.characters = draft.characters.filter(c => c.name !== action.payload.character.name);
        break;
    }
  });

export default favoriteCharactersReducer;
