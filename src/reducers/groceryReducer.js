import { ADD_GROCERY } from '../actions/actionTypes';
import groceryItemList from '../data/groceryItems';

const initialState = {
  groceryItemList: groceryItemList,
  shoppingList: []
}

function updateGroceryList(state, action) {
  // filter the grocery list
  const groceryList = state.groceryItemList.filter(item => item.id !== action.id);

  // identify the clicked grocery item
  const selectedGroceryItem = state.groceryItemList.find((item) => {
    return item.id === action.id;
  })

  // update the shopping list
  const updatedShoppingList = state.shoppingList.concat(selectedGroceryItem);

  return {
    groceryItemList: groceryList,
    shoppingList: updatedShoppingList
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GROCERY:
      return updateGroceryList(state, action);
    default:
      return state;
  }
}