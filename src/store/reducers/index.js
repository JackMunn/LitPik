import {combineReducers} from 'redux';
import dashboardReducer from './Dashboard';
import mapReducer from './MapRender';
import navReducer from './NavBar';
import {reducer as formReducer} from 'redux-form';


export default combineReducers({dashboardReducer,mapReducer, navReducer, form: formReducer});