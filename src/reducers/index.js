import { combineReducers } from 'redux';
import groceryReducer from './groceryReducer';
import shoppingReducer from './shoppingReducer';
import pocketMoneyReducer from './pocketMoneyReducer';

export default combineReducers({
  grocery: groceryReducer,
  shopping: shoppingReducer,
  pocket: pocketMoneyReducer
});