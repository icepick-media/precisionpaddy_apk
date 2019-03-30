import { CHANGE_NAVIGATION } from '../actions/types';

const initialState = {
  currentNav: ''
}

export default function(state = initialState, action: any) {
  switch (action.type) {
    case CHANGE_NAVIGATION:
      return {
        ...state,
        currentNav: action.payload
      };
    default:
      return state;
  }
}
