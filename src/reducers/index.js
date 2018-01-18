import { combineReducers } from 'redux';
import groceryReducer from './groceryReducer';
import shoppingReducer from './shoppingReducer';

export default combineReducers({
  grocery: groceryReducer,
  shopping: shoppingReducer
});