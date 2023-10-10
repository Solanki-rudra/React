import React from 'react'

function Table({arrOfData,deleteId,editId}) {
    function deleter(id) {
        deleteId(id)
    }
    function editer(id) {
        editId(id)
    }
  return (
    <div>
      <table className='w-100 '>
        <thead>
            <tr>
                <th>no.</th>
                <th>firstName</th>
                <th>lastname</th>
                <th>email</th>
                <th>phone</th>
                <th>password</th>
                <th>Del/Edit</th>
            </tr>
        </thead>
        <tbody>
            {
                arrOfData.map((item,index) => {
                   return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.password}</td>
                        <td><button className=' bg-success rounded' onClick={()=>{editer(item.id)}}>Edit</button>
                        <button className=' bg-danger rounded' onClick={()=>{deleter(item.id)}}>Delete</button></td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
