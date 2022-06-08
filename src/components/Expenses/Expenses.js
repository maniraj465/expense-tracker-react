import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
        console.log('Selected Year: '+ selectedYear);
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    let expenseContent = <p>No expenses fount.</p>;
    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                expenseTitle = {expense.title}
                expenseAmont = {expense.amount}
                expenseDate = {expense.date}
            />
        ));
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selectedYear={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {expenseContent}
            </Card>
        </div>
    );
};

export default Expenses;