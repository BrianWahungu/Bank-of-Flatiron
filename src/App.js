import { useEffect, useState } from 'react';
import RecordsTable from './components/table';
import TransactionForm from './components/TransactionForm';
import { BASE_URL } from './constants';
import "./App.css"
// import logo from './logo.svg';

function App() {
  const [ transactions, setTransactions ] = useState([])
  const [ filteredTransactions, setFieldTransactions ] = useState([])
  const lastIndex = transactions.length -1

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTransactions(data);
        setFieldTransactions(data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const filterRecord = (searchText) => {
    console.log(searchText);
    const filterdArr = transactions.filter(transaction => (transaction.description.toLowerCase()).includes(searchText.toLowerCase()))
    setFieldTransactions(filterdArr);
  }

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
    setFieldTransactions([...filteredTransactions, transaction])
  }

  return (
    <div className="App">
      <header className="header">
        <h2 className='kichwa'>The Bank of Flatiron</h2>
      </header>
      <div className='row m-4'>
        <div className='col-8'>
          <input className='searchh' onChange={(e) => filterRecord(e.target.value)} placeholder="Search for Transactions"></input>
          <button type='submit'>Search</button>
          <RecordsTable transactions={filteredTransactions}/>
        </div>
        <div className='col-4 meza'>
          <TransactionForm lastIdx={transactions.length} addTransaction={addTransaction}/>
        </div>

      </div>
    </div>
  );
}

export default App;
