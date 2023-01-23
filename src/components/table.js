import React from 'react'

const RecordsTable = ({transactions}) => {
  return (
  <table class="table mt-3 majaribu">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">CATEGORY</th>
      <th scope="col">DATE</th>
      <th scope="col">DESCRIPTION</th>
    </tr>
  </thead>
  <tbody className='majaribu'>
    {transactions.map((transaction) => <tr>
      <td>{transaction.id}</td>
      <td>{transaction.category}</td>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
    </tr>
    )}
    
  </tbody>
</table>
  )
}

export default RecordsTable