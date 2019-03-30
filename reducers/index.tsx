import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import navReducer from './navReducer';
import dashboardReducer from './dashboardReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  nav: navReducer,
  dashboard: dashboardReducer
});
