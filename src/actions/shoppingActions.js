import { REMOVE_SHOPPING_ITEM } from './actionTypes';

export function removeShoppingItemById(id) {
  return {
    type: REMOVE_SHOPPING_ITEM,
    id: id
  }
}