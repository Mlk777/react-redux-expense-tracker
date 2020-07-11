import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Transaction from './Transaction';

const TransactionList = ({ transactions, setEdit }) => {
  return (
    <div className='my-6'>
      <h3 className='text-lg md:text-xl border-b-2 border-gray-300 text-gray-800 font-medium'>
        History
      </h3>

      {transactions &&
        transactions.map(transaction => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
    </div>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.array,
};

const mapStateToProps = state => ({
  transactions: state.transactions.transactions,
});

export default connect(mapStateToProps)(TransactionList);
