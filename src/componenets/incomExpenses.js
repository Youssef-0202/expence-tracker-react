import React, { useContext } from "react";
import { GlobaleContext } from "../context/GlobalState";

export const IncomExpenses = () => {
  const { transactions } = useContext(GlobaleContext);
  const amounts = transactions.map((transactions) => transactions.amount);
  const income = amounts
    .filter((e) => e > 0)
    .reduce((acc, item) => acc + item, 0);
  const expense = amounts
    .filter((e) => e < 0)
    .reduce((acc, item) => acc + item, 0);
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${Math.abs(expense)}</p>
        </div>
      </div>
    </div>
  );
};
