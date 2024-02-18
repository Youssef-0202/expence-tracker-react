import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobaleContext } from "../context/GlobalState";

export const TransactionalList = () => {
  const { transactions } = useContext(GlobaleContext);
  console.log(transactions);
  console.log();
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
