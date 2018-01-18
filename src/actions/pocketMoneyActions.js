import {
  ADD_POCKET_MONEY,
  REMOVE_POCKET_MONEY
} from '../actions/actionTypes';

export function addPocketMoneyById(id) {
  return {
    type: ADD_POCKET_MONEY,
    id: id
  }
}

export function removePocketMoneyById(id) {
  return {
    type: REMOVE_POCKET_MONEY,
    id: id
  }
}