import './App.css';
import Expense from './components/Expenses/Expenses';

function App() {
  const expensesList = [
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
  return (
    <div className="App">
      <h2>Expenses</h2>
      <Expense expenses = {expensesList} />
    </div>
  );
}

export default App;
