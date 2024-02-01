import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  console.log('props.date', props.year);
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className="expense-date">
      <div className="expense-day">{day} </div>
      <div className="expense-date__month">{month} </div>
      <div className="expense-year">{year} </div>
    </div>
  );
};

export default ExpenseDate;
