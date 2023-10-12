import React from 'react'

function TableForData({dataForPrint,forDeleteId,forEditId}) {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Number</th>
                <th>Password</th>
                <th>DOB</th>
                <th>Edit/Del</th>
            </tr>
        </thead>
        <tbody>
            {
                dataForPrint.map((item,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.number}</td>
                        <td>{item.password}</td>
                        <td>{item.dateOfBirth}</td>
                        <td>
                            <button className="btn bg-primary mx-1" onClick={()=>{forEditId(item.id)}}>Edit</button>
                            <button className="btn bg-danger mx-1" onClick={()=>{forDeleteId(item.id)}}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default TableForData
