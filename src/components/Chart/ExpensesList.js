import React from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
    if (props.expensesList.length === 0) {
        return <h2 className="expenses-list-fallback">No expenses fount.</h2>;
    }
    return <ul className="expenses-list">
        {props.expensesList.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                expenseTitle = {expense.title}
                expenseAmont = {expense.amount}
                expenseDate = {expense.date}
            />
        ))}
    </ul>;
};

export default ExpensesList;