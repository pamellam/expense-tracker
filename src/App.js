import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2024, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2025, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // get data from the child (NewExpense)
  function addExpenseHandler(expense) {
    // console.log('In app JS');
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; //update state based on older snapshot of the same state
    });
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
