import React from 'react'

const Transaction = ({ title, amount, date }) => {
    return (
        <div>
            <div className="transaction-row">
                <div className="transaction-item">{title}</div>
                <div className="transaction-item">{date}</div>
                <div className="transaction-item-amount">{" + "}{amount}</div>
            </div>
        </div>
    )
}

export default Transaction
