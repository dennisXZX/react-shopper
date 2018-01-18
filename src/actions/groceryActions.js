import { ADD_GROCERY } from './actionTypes';

export function addGroceryById(id) {
  return {
    type: ADD_GROCERY,
    id: id
  }
}