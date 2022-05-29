import React, { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const DUMMY_EXPENSES_LIST = [
    {
      id: 'e1',
      title: 'Bike insurance',
      amount: 3000,
      date: new Date()
    },
    { 
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expensesList, setExpensesList] = useState(DUMMY_EXPENSES_LIST);
  const addExpenseHandler = (expense) => {
    setExpensesList(prevExpenses => {
      console.table([expense, ...prevExpenses]);
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <h2>Expenses</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses = {expensesList} />
    </div>
  );
}

export default App;
