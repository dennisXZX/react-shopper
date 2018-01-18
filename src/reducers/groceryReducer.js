import { ADD_GROCERY } from '../actions/actionTypes';
import groceryItemList from '../data/groceryItems';

const initialState = {
  groceryItemList: groceryItemList
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GROCERY:
      const groceryList = state.groceryItemList.filter(item => item.id !== action.id)
      return {
        groceryItemList: groceryList
      };
    default:
      return state;
  }
}