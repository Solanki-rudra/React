import Table from 'react-bootstrap/Table';
import React,{useState,useEffect} from 'react';

function Table1(props) {
    let arr_data = props.arr_data
    // const [delete_index, setDelete_index] = useState(null);
    const editer = (ind) => () => {
        props.edit_index(ind)
    } 

    const deleter = (ind) => (e) => {
        props.delete_index(ind)
    } 

  return (
    <Table striped bordered hover variant="dark" className='container my-3'>
      <thead>
        <tr>
          <th>Medicine</th> 
          <th>Quantity</th>
          <th>Expiry</th>
          <th>Rack</th>
          <th>Batch</th>
          <th>Edit/Del</th>
        </tr>
      </thead>
      <tbody>
        {
            arr_data.map((item,index) => (
                <tr key={index}>
                    <td>{item.medicine}</td>
                    <td>{item.qty}</td>
                    <td>{item.expiry}</td>
                    <td>{item.rack}</td>
                    <td>{item.batch}</td>
                    <td><button className='btn bg-success mx-2' onClick={editer(index)}>Edit</button><button className='btn bg-danger' onClick={deleter(index)}>Del</button></td>
                </tr>
            ))
        }
      </tbody>
    </Table>
  );
}

export default Table1;