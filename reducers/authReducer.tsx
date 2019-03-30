import { SET_CURRENT_USER, SET_ROUTER_URL } from '../actions/types';
import isEmpty from '../validation/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {},
  routerUrl: "",
}

export default function(state = initialState, action: any) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_ROUTER_URL:
      return {
        ...state,
        routerUrl: action.payload
      };
    default:
      return state;
  }
}