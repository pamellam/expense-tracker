import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2025');
  // Derived state
  // let filterInfoText = '2022, 2024 & 2025';

  // if (filteredYear === '2022') {
  //   filterInfoText = '2023, 2024 & 2025';
  // } else if (filteredYear === '2023') {
  //   filterInfoText = '2022, 2024 & 2025';
  // } else if (filteredYear === '2024') {
  //   filterInfoText = '2022, 2023 & 2025';
  // } else {
  //   filterInfoText= '2022, 2023 & 2024';
  // }

  function filterChangedHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses } />
        {/* <p> Data for years {filterInfoText} is hidden.</p> */}
        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
