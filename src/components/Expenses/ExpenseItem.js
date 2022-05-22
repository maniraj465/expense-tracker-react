import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  
    return (
      <Card className="expense-item">
        <ExpenseDate date = {props.expenseDate} />
        <div className="expense-item-description">
          <h2>{props.expenseTitle}</h2>
          <div className="expense-item-price">
            Rs.{props.expenseAmont}
          </div>
        </div>
      </Card>
    );
  }
  
  export default ExpenseItem;
  