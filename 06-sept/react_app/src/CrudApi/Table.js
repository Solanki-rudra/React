import React, { useState, useEffect } from 'react';
const url = 'http://localhost:3000/comments/';

function Table(props) {
    let arrOfAllData = props.arrOfAllData
    const deleter =(id) =>{
        props.forDelete(id)
    }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {arrOfAllData.map((row, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{row.firstname}</td>
              <td>{row.lastname}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.password}</td>
              <td><button onClick={()=>{deleter(row.id)}}>Del</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
