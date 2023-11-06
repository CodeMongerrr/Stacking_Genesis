import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';
import Transaction from './Transaction';

const transactions = [
  { title: "Mint", amount: "10 NFTs", date: "2023-09-15" },
  { title: "Stake", amount: "5 NFTs", date: "2023-09-18" },
  { title: "BatchStake", amount: "20 NFTs", date: "2023-09-22" },
  { title: "Claim", amount: "100 USDTs", date: "2023-09-25" },
  { title: "Mint", amount: "15 NFTs", date: "2023-09-28" },
  { title: "Withdraw", amount: "5 NFTs", date: "2023-10-03" },
  { title: "Stake", amount: "10 NFTs", date: "2023-10-08" },
  { title: "BatchStake", amount: "25 NFTs", date: "2023-10-12" },
  { title: "Claim", amount: "150 USDTs", date: "2023-10-16" },
  { title: "Mint", amount: "20 NFTs", date: "2023-10-20" },
  { title: "Withdraw", amount: "10 NFTs", date: "2023-10-24" },
  { title: "Stake", amount: "15 NFTs", date: "2023-10-28" },
  { title: "BatchStake", amount: "30 NFTs", date: "2023-11-01" },
  { title: "Claim", amount: "200 USDTs", date: "2023-11-05" },
  { title: "Mint", amount: "25 NFTs", date: "2023-11-08" },
  { title: "Withdraw", amount: "15 NFTs", date: "2023-11-12" },
  { title: "Stake", amount: "20 NFTs", date: "2023-11-16" },
  { title: "BatchStake", amount: "35 NFTs", date: "2023-11-20" },
  { title: "Claim", amount: "250 USDTs", date: "2023-11-24" },
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
