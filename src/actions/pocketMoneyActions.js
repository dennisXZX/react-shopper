import {
  ADD_POCKET_MONEY,
  REMOVE_POCKET_MONEY,
  USE_COUPON
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

export function useCoupon() {
  return {
    type: USE_COUPON,
    money: 10
  }
}