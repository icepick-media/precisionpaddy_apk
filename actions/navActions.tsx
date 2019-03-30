import { 
    CHANGE_NAVIGATION 
} from './types';

/**
 * Set current navigation screen 
 * and set into Redux state
 * @param {string} navigation 
 */
export const changeNavigation = (navigation: string) => (dispatch: any) => {
    dispatch({
        type: CHANGE_NAVIGATION,
        payload: navigation
      })
}
