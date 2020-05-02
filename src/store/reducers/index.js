import {combineReducers} from 'redux';
import dashboardReducer from './Dashboard';
import mapReducer from './MapRender';
import navReducer from './NavBar';
import {reducer as formReducer} from 'redux-form';
import authReducer from './Auth';


export default combineReducers({dashboardReducer,mapReducer, navReducer, authReducer, form: formReducer});