import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
const Expenses = (props) => {
  return (
    <>
      <div className='expenses'>
      <ExpenseItem 
    description ={ props.ExpenseData[0].description}
    date ={props.ExpenseData[0].date}
    price ={props.ExpenseData[0].price}
    />
    <ExpenseItem 
      description ={props.ExpenseData[1].description}
      date ={props.ExpenseData[1].date}
      price ={props.ExpenseData[1].price}
    />
    <ExpenseItem 
      description ={props.ExpenseData[2].description}
      date ={props.ExpenseData[2].date}
      price ={props.ExpenseData[2].price}
    />
      </div>
    </>
  )
}

export default Expenses
