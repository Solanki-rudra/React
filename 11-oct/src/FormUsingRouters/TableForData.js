import React from 'react'

function TableForData({dataForTable,deleteId}) {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Sr.No.</th>
                <th>Firstname</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Password</th>
                <th>Del</th>
            </tr>
        </thead>
        <tbody>
            {
                dataForTable.map((item,index)=>(
                    <tr key={index}>
                        <td className='text-center'>{index+1}</td>
                        <td>{item.firstname}</td>
                        <td>{item.age}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>
                            <button className="btn bg-danger" onClick={()=>{deleteId(item.id)}}>Delete</button>
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
