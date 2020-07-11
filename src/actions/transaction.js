import {
  ADD_TRANSACTION,
  EDIT_TRANSACTION,
  DELETE_TRANSACTION,
  SET_EDIT,
  SET_CURRENT,
} from './types';

export const addTransaction = transaction => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const setEdit = () => ({
  type: SET_EDIT,
});
export const setCurrent = transaction => ({
  type: SET_CURRENT,
  payload: transaction,
});
export const editTransaction = updatedTransaction => ({
  type: EDIT_TRANSACTION,
  payload: updatedTransaction,
});

export const deleteTransaction = id => ({
  type: DELETE_TRANSACTION,
  payload: id,
});
