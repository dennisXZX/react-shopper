import { combineReducers } from 'redux';
import groceryReducer from './groceryReducer';

export default combineReducers({
  grocery: groceryReducer
});