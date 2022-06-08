import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from '../Chart/ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
        console.log('Selected Year: '+ selectedYear);
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter 
                    selectedYear={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expensesList={filteredExpenses} />
                <ExpensesList expensesList={filteredExpenses} />
            </Card>
        </li>
    );
};

export default Expenses;