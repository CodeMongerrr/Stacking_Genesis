import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';
import Transaction from './Transaction';

const transactions = [
  { title: "Purchase", amount: "$120", date: "15/09/23" },
  { title: "Withdrawal", amount: "$85", date: "18/09/23" },
  { title: "Payment", amount: "$200", date: "22/09/23" },
  { title: "Deposit", amount: "$150", date: "25/09/23" },
  { title: "Purchase", amount: "$100", date: "28/09/23" },
  { title: "Withdrawal", amount: "$75", date: "03/10/23" },
  { title: "Payment", amount: "$180", date: "08/10/23" },
  { title: "Deposit", amount: "$250", date: "12/10/23" }
];

const TransactionHistory = () => {
  const cardHeight = 150 + 60 * transactions.length; // Adjust the height based on the number of transactions
  return (
    <div className='card' style={{ height: `${cardHeight}px` }}>
      <div className="transaction-history">
        <div className="title">Transaction History</div>
        {transactions.map((transaction, index) => (
          <Transaction
            key={index}
            title={transaction.title}
            amount={transaction.amount}
            date={transaction.date}
          />
        ))}
      </div>

    </div>
  );
};

export default TransactionHistory;
