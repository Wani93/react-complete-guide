import React from "react";
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expenses = props.items.map((item) => {
    return <ExpenseItem
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  })

  return (
    <Card className={'expenses'}>
      {expenses}
    </Card>
  )
}

export default Expenses