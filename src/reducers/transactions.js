import {
  ADD_TRANSACTION,
  EDIT_TRANSACTION,
  DELETE_TRANSACTION,
  SET_EDIT,
  SET_CURRENT,
} from '../actions/types';

const initialState = {
  isEdit: false,
  current: null,
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 1000 },
    { id: 3, text: 'PS5', amount: -400 },
    { id: 4, text: 'Washing Machine', amount: -350 },
  ],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    case SET_EDIT:
      return {
        ...state,
        isEdit: true,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case EDIT_TRANSACTION:
      return {
        ...state,
        isEdit: false,
        transactions: state.transactions.map(transaction =>
          transaction.id === payload.id ? payload : transaction
        ),
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== payload
        ),
      };
    default:
      return state;
  }
}
