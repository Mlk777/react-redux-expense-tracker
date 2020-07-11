import React from 'react';
import PropTypes from 'prop-types';
import { deleteTransaction, setEdit, setCurrent } from '../actions/transaction';
// import { editTransaction } from '../actions/transaction';

import { connect } from 'react-redux';

const Transaction = ({
  transaction,
  deleteTransaction,
  // editTransaction,
  setEdit,
  setCurrent,
}) => {
  const handleEdit = () => {
    setEdit();
    // editTransaction(transaction.id);
    setCurrent(transaction);
  };
  return (
    <div className='w-11/12 md:w-full mx-auto mt-4'>
      <div className='w-full flex items-center my-2'>
        <div
          className={`w-full flex justify-between items-center px-2 py-1 border border-r-6 border-gray-400 shadow-sm rounded-sm ${
            Math.sign(transaction.amount) === 1
              ? 'border-r-green-500'
              : 'border-r-red-700'
          }`}
        >
          <div className='text-lg md:text-xl'>{transaction.text}</div>
          <div className='text-lg md:text-xl'>
            {transaction.amount > 0
              ? '+' + transaction.amount
              : transaction.amount}
            $
          </div>
        </div>
        <i
          className='fas fa-times p-2 text-red-700'
          onClick={() => deleteTransaction(transaction.id)}
        />
        <i
          className='fas fa-pen-square p-1 text-blue-400'
          onClick={handleEdit}
        ></i>
      </div>
    </div>
  );
};

Transaction.propTypes = {
  deleteTransaction: PropTypes.func.isRequired,
  editTransaction: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deleteTransaction: id => dispatch(deleteTransaction(id)),
  editTransaction: id => dispatch(editTransaction(id)),
  setEdit: () => dispatch(setEdit()),
  setCurrent: transaction => dispatch(setCurrent(transaction)),
});

export default connect(null, mapDispatchToProps)(Transaction);
