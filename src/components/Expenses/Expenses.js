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
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selectedYear={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {props.expenses.map((expense) => (
                    <ExpenseItem 
                        key={expense.id}
                        expenseTitle = {expense.title}
                        expenseAmont = {expense.amount}
                        expenseDate = {expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;