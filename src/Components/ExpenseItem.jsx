import React from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'




const ExpenseItem = (props) => {




  return (
    <>
       <div className='expense-item'>
        <ExpenseDate date ={ props.date}/>
   
    <div className='expense-item__description'>
        <h2> {props.description}</h2>
        </div>
        <div className='expense-item__price'> {props.price} </div>
  </div>
    </>
  )
}

export default ExpenseItem
