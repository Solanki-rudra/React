import React from 'react'

function Table({medicine_data_array,delete_id,edit_id}) {
  function forEdit(id) {
    edit_id(id)
  }
  function forDelete(id) {
    delete_id(id)
  }
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>S.No.</th>
                <th>Medicine</th>
                <th>Rack</th>
                <th>Batch</th>
                <th>Quantity</th>
                <th>Expiry</th>
                <th>Edit / Del</th>
            </tr>
        </thead>
        <tbody>
            {
                medicine_data_array.map((item,index) => (
                    <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{item.medicine}</td>
                        <td>{item.rack}</td>
                        <td>{item.batch}</td>
                        <td>{item.quantity}</td>
                        <td>{item.expiry}</td>
                        <td>
                            <button className='btn bg-success' onClick={()=>{forEdit(item.id)}}>Edit</button>
                            <button className='btn bg-danger' onClick={()=>{forDelete(item.id)}}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
