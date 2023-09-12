import Table from 'react-bootstrap/Table';
import React,{useState,useEffect} from 'react';

function Table1(props) {
    let arr_data = props.arr_data
    const [arr, setArr] = useState([]);

    useEffect(() => {
        setArr(arr_data)
    }, [arr_data]);

    const editer = (ind) => () => {
        console.log(ind)
        let b = arr.find((item,index) => index == ind)
        // console.log(b)
        props.dataForEdit(b)
    } 

    const deleter = (ind) => (e) => {
        let a = arr.filter((item,index) =>  ind != index)
        setArr(a)
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
            arr.map((item,index) => (
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
        {/* <tr>
          <td>Dolo</td>
          <td>2</td>
          <td>22-05-2024</td>
          <td>2</td>
          <td>A2</td>
          <td><button className='btn bg-success mx-2'>Edit</button><button className='btn bg-danger'>Del</button></td>
        </tr>
        <tr>
          <td>Para</td>
          <td>20</td>
          <td>12-05-2034</td>
          <td>6</td>
          <td>A6</td>
          <td><button className='btn bg-success mx-2'>Edit</button><button className='btn bg-danger'>Del</button></td>
        </tr> */}
      </tbody>
    </Table>
  );
}

export default Table1;