import React from 'react'
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
const NewExpense = (props) => {

  const expenseDataHandler = (enteredExpenasedata)=>{

    const ExpenseData = {
      ...enteredExpenasedata,
      id : Math.random().toString(),
    };
    props.onAddExpense(ExpenseData)

  };

  return (
    <>
      <div className='new-expense'>
        <ExpenseForm onSaveExpenseData ={expenseDataHandler}/>

      </div>
    </>
  )
}

export default NewExpense
