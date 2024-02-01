// import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // const [title, SetTitle] = useState(props.title);

  // let title = props.title;
//  console.log('Expense Item evaluated by Ract')

  // const clickHandler = () => {
  //   SetTitle('New TV');
  //   console.log(title);
  //};

  return (
    <li>
      <Card className="expense-item ">
        <ExpenseDate
          date={props.date}
          month={props.month}
          year={props.year}
        ></ExpenseDate>
        <div className="expense-item__description">
          <h2> {props.title} </h2>
          <div className="expense-item__price"> ${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
