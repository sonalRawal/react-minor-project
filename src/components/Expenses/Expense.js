import React, { useState } from "react";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filterByYear = props.items.filter(
    (expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  )
  let expenseContent = <p>No Expenses Found</p> ;
  if(filterByYear.length >0){
    expenseContent = filterByYear.map((expenseItem) => (
      <ExpenseItem
        key={expenseItem.id}
        title={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date}
      />
    ))
  }
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
      
    </div>
  );
};

export default Expense;
