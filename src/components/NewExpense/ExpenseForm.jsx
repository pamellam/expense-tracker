import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
    // -- guarantee the state snapshot will be tha latest snapshot
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState, enteredTitle: event.target.value
    //   }
    // })
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  }

  // function inputChangedHandler(identifier, value) {
  //   if (identifier === 'title') {
  //     setEnteredTitle(value);
  //   }
  //   if (identifier === 'amount') {
  //     setEnteredAmount(value);
  //   }
  //   if (identifier === 'date') {
  //     setEnteredDate(value);
  //   }

  //  }

  function submitHandler(event) {
    // take and change user input
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // from NewExpesnes.jsx (child)
    props.onSaveExpenseData(expenseData);
    
    // console.log(expenseData);
    setEnteredTitle(''); // overwrite existing title
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {/* Title */}
        <div className="new-expense__control">
          <label>Title </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* <input type="text" onChange={(event)=>inputChangedHandler('title', event.target.value)} /> */}
        </div>
        {/* Amount */}
        <div className="new-expense__control">
          <label>Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        {/* Date */}
        <div className="new-expense__control">
          <label>Date </label>
          <input
            type="date"
            min="2021-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      {/* Button */}
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
