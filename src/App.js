import "./App.css";
import { Header } from "./componenets/Header";
import { Balance } from "./componenets/Balance";
import { IncomExpenses } from "./componenets/incomExpenses";
import { TransactionalList } from "./componenets/TransactionalList";
import { AddTransaction } from "./componenets/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomExpenses />
        <TransactionalList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
