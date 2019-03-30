import { AsyncStorage } from 'react-native'; 
import _ from 'lodash';
import { 
    GET_ERRORS, 
    SET_CURRENT_USER
} from './types';
import { AUTH_KEY, USER_KEY } from '../utils/keys';
import { STAGING_API_HOST } from '../utils/config';

export const getAuthInfo = () => (dispatch: any) => {
    AsyncStorage.multiGet([AUTH_KEY, USER_KEY], (err, val) => {
        if(err) {
            dispatch(setCurrentUser({}));
        }
        if(!val){
            dispatch(setCurrentUser({}));
        }

        let zippedObj = _.zipObject(val);
        if(!zippedObj[AUTH_KEY]) {
            dispatch(setCurrentUser({}));
        }

        let authInfo = {
            header: {
                Authorization: 'Bearer ' + zippedObj[AUTH_KEY]
            },
            user: JSON.parse(zippedObj[USER_KEY])
        }

        dispatch(setCurrentUser(authInfo.user));
    });
}

/**
 * Login user and store token
 * @param {Object} userData 
 */
export const loginUser = (userData: any) => (dispatch: any) => {
    let path = 'login/'
    return fetch(STAGING_API_HOST + path, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userData.username,
                password: userData.password
            })
        })
        .then((response) => {
            if(response.status >= 200 && response.status < 300) {
                let res = JSON.parse(response.text()._55);
                if(res.success === 'true'){
                    AsyncStorage.multiSet([
                        [AUTH_KEY, res.token],
                        [USER_KEY, JSON.stringify(res.data)]
                    ], (err) => {
                        if(err){
                            throw err;
                        }
                        dispatch(setCurrentUser(res));
                    });
                }
            };
            throw {
                badCredentials: response.status == 401,
                unknownError: response.status != 401
            }
        })
        .catch((err) => dispatch({
            type: GET_ERRORS,
            payload: err
          })
        );
}

/**
 * Get current login user data decoded from JWT Token 
 * and set into Redux state
 * @param {Object} decoded 
 */
export const setCurrentUser = (decoded: Object) => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    }
}
  
  /**
   * Logout user
   */
  export const logOut = () => (dispatch: any) => {
    // Remove local storage
    // localStorage.removeItem('jwtToken');
    AsyncStorage.multiRemove([AUTH_KEY, USER_KEY], (err: any) => {
        //
    });
    // Set current user to {} and it will set authentication to false
    dispatch(setCurrentUser({}));
  }