import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  // data submitted by ExpenseForm
  function saveExpenseDataHandler(enteredExpesneData) {
    const expenseData = {
      ...enteredExpesneData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    // from App.js
    props.onAddExpense(expenseData);
  }

  // this will arive at app.js (parent)

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
