import { ADD_GROCERY, REMOVE_SHOPPING_ITEM } from '../actions/actionTypes';
import groceryItemList from '../data/groceryItems';

const initialState = {
  groceryItemList: groceryItemList
}

function removeItemFromGroceryList(state, action) {
  // filter the grocery list
  const groceryList = state.groceryItemList.filter(item => item.id !== action.id);

  return {
    groceryItemList: groceryList
  };
}

function addItemToGroceryList(state, action) {
  // identify the selected item
  const selectedGroceryItem = groceryItemList.find(item => {
    return item.id === action.id;
  })

  return {
    groceryItemList: [...state.groceryItemList, selectedGroceryItem]
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GROCERY:
      return removeItemFromGroceryList(state, action);
    case REMOVE_SHOPPING_ITEM:
      return addItemToGroceryList(state, action)
    default:
      return state;
  }
}