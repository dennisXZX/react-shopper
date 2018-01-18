import groceryItemList from '../data/groceryItems';

import {
  ADD_POCKET_MONEY,
  REMOVE_POCKET_MONEY,
  USE_COUPON
} from '../actions/actionTypes';

const initialState = {
  pocketMoney: 50
}

function addPocketMoney(state, action, selectedGroceryItem) {
  const updatedPocketMoney = state.pocketMoney - selectedGroceryItem.cost;

  return {
    pocketMoney: updatedPocketMoney
  }
}

function removePocketMoney(state, action, selectedGroceryItem) {
  const updatedPocketMoney = state.pocketMoney + selectedGroceryItem.cost;

  return {
    pocketMoney: updatedPocketMoney
  }
}

function useCoupon(state, action) {
  const updatedPocketMoney = state.pocketMoney + action.money;

  return {
    pocketMoney: updatedPocketMoney
  }
}

export default (state = initialState, action) => {
  // find the selected item
  const selectedGroceryItem = groceryItemList.find(item => {
    return item.id === action.id
  })

  switch (action.type) {
    case ADD_POCKET_MONEY:
      return addPocketMoney(state, action, selectedGroceryItem);
    case REMOVE_POCKET_MONEY:
      return removePocketMoney(state, action, selectedGroceryItem);
    case USE_COUPON:
      return useCoupon(state, action);
    default:
      return state;
  }
}