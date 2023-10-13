import React from 'react'

function TableForData({dataForPrint,forDeleteId,forEditId}) {
  return (
    <div className="tableWraper m-auto bg-success p-5 rounded">
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
                        <td className='text-center'>{index+1}</td>
                        <td>{item.name}</td>
                        <td className='text-center'>{item.number}</td>
                        <td>{item.password}</td>
                        <td className='text-center'>{item.dateOfBirth}</td>
                        <td className='text-center'>
                            <button className="btn bg-success mx-1" onClick={()=>{forEditId(item.id)}}>Edit</button>
                            <button className="btn bg-success mx-1" onClick={()=>{forDeleteId(item.id)}}>Delete</button>
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
