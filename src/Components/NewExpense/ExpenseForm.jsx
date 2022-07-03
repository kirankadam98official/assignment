import React, { useState } from 'react'
import "./ExpenseForm.css"
const ExpenseForm = (props) => {

  const [title ,setTitle ] =useState('')
  const [amount ,setAmout ] =useState('')
  const [date ,setDate ] =useState('')

  const titleChangeHandler = (e)=>{
    setTitle(e.target.value)
    // console.log(e.target.value)
  }

  const amountChangeHandler = (e)=>{
    setAmout(e.target.value)
    // console.log(e.target.value);

  }
  const dateChangeHandler = (e)=>{
    setDate(e.target.value)
    console.log(e.target.value)
  }

const submitFormHandler = (e)=>{
  e.preventDefault();
   
  const expenseData = {
    title : title,
    amount: amount,
    date : new Date(date)
  }
  props.onSaveExpenseData(expenseData);

  setTitle('');
  setAmout('');
  setDate('');

}

  return (
    <>
      <form onSubmit={submitFormHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label> Title</label>
                <input type="text" value={title} onChange={titleChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label> Amount</label>
                <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label> Date</label>
                <input type="date" value={date} min="2019-1-1" max="2025-12-01" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label> Add Expense</label>
                <button type='submit' className='new-expense__actions'> Add Expense</button>
            </div>
        </div>
        
      </form>
    </>
  )
}

export default ExpenseForm
