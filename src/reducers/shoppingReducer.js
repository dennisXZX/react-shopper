import { ADD_GROCERY, REMOVE_SHOPPING_ITEM } from '../actions/actionTypes';
import groceryItemList from '../data/groceryItems';

const initialState = {
  shoppingList: []
}

function addGroceryToShoppingList(state, action) {
  // identify the clicked grocery item
  const selectedGroceryItem = groceryItemList.find((item) => {
    return item.id === action.id;
  });

  // update the shopping list
  const updatedShoppingList = state.shoppingList.concat(selectedGroceryItem);

  return {
    shoppingList: updatedShoppingList
  }
}

function removeItemFromShoppingList(state, action) {
  // filter the shopping list
  const updatedShoppingList = state.shoppingList.filter(item => {
    return item.id !== action.id
  })

  return {
    shoppingList: updatedShoppingList
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_GROCERY:
      return addGroceryToShoppingList(state, action)
    case REMOVE_SHOPPING_ITEM:
      return removeItemFromShoppingList(state, action)
    default:
      return state;
  }
}
