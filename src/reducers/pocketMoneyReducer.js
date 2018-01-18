import groceryItemList from '../data/groceryItems';

import {
  ADD_POCKET_MONEY,
  REMOVE_POCKET_MONEY
} from '../actions/actionTypes';

const initialState = {
  pocketMoney: 50
}

export default (state = initialState, action) => {
  // find the selected item
  const selectedGroceryItem = groceryItemList.find(item => {
    return item.id === action.id
  })

  let updatedPocketMoney;

  switch (action.type) {
    case ADD_POCKET_MONEY:
      updatedPocketMoney = state.pocketMoney - selectedGroceryItem.cost;

      return {
        pocketMoney: updatedPocketMoney
      }
    case REMOVE_POCKET_MONEY:
      updatedPocketMoney = state.pocketMoney + selectedGroceryItem.cost;

      return {
        pocketMoney: updatedPocketMoney
      }
    default:
      return state;
  }
}