import { ADD_GROCERY, REMOVE_SHOPPING_ITEM } from '../actions/actionTypes';
import groceryItemList from '../data/groceryItems';

const initialState = {
  shoppingList: [],
  totalCost: 0,
  totalCalories: 0,
  totalWeight: 0
}

function addGroceryToShoppingList(state, action) {
  // identify the selected grocery item
  const selectedGroceryItem = groceryItemList.find((item) => {
    return item.id === action.id;
  });

  // update total cost, calories and weight
  const updatedCost = state.totalCost + selectedGroceryItem.cost;
  const updatedCalories = state.totalCalories + selectedGroceryItem.calories;
  const updatedWeight = state.totalWeight + selectedGroceryItem.weight;

  // update the shopping list
  const updatedShoppingList = [...state.shoppingList, selectedGroceryItem];

  return {
    shoppingList: updatedShoppingList,
    totalCost: updatedCost,
    totalCalories: updatedCalories,
    totalWeight: updatedWeight
  }
}

function removeItemFromShoppingList(state, action) {
  // filter the shopping list
  const updatedShoppingList = state.shoppingList.filter(item => {
    return item.id !== action.id
  })

  // identify the selected grocery item
  const selectedGroceryItem = groceryItemList.find((item) => {
    return item.id === action.id;
  });

  // update total cost, calories and weight
  const updatedCost = state.totalCost - selectedGroceryItem.cost;
  const updatedCalories = state.totalCalories - selectedGroceryItem.calories;
  const updatedWeight = state.totalWeight - selectedGroceryItem.weight;

  return {
    shoppingList: updatedShoppingList,
    totalCost: updatedCost,
    totalCalories: updatedCalories,
    totalWeight: updatedWeight
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
