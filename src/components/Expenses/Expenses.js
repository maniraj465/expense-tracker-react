import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem 
            expenseTitle = {props.expenses[0].title}
            expenseAmont = {props.expenses[0].amount}
            expenseDate = {props.expenses[0].date}
            />
            <ExpenseItem 
            expenseTitle = {props.expenses[1].title}
            expenseAmont = {props.expenses[1].amount}
            expenseDate = {props.expenses[1].date}
            />
        </Card>
        
    );
}

export default Expenses;