import { combineReducers } from "redux";

//File is used to combine all the reducers.
import snapchat from './Snapchat';
import showFilter from './filter';


export default combineReducers({
   snapchat, showFilter
})