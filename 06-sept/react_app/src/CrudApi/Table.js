import React from 'react';

function Table(props) {
    let arrOfAllData = props.arrOfAllData
    const deleter =(id) =>{
        props.forDelete(id)
    }
    const editer = (id) => {
        props.forEdit(id)
    }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th >Sr. No.</th>
            <th>First name</th>
            <th>Last name</th>
            <th >Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Del/Edit</th>
          </tr>
        </thead>
        <tbody>
          {arrOfAllData.map((row, index) => (
            <tr key={index}>
              <td className='text-center'>{index+1}.</td>
              <td>{row.firstname}</td>
              <td>{row.lastname}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.password}</td>
              <td><button className='rounded bg-success' onClick={()=>{editer(row.id)}}>Edit</button>
              <button className='rounded bg-danger' onClick={()=>{deleter(row.id)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
