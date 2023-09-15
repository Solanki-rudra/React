import React from 'react';
const url = 'http://localhost:3331/comments/';

function Table(props) {
  // const [arrOfAllData, setArrOfAllData] = useState([]);
    let arrOfAllData = props.arrOfAllData
    const deleter =(id) =>{
        props.forDelete(id)
    }
    const editer = (id) => {
        props.forEdit(id)
    }

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch(url);
    //       const data = await response.json();
    //       console.log(data);
    //       setArrOfAllData(data)
    //     } catch (error) {
    //       alert(error.message);
    //     }
    //   };
    //    fetchData();
    // }, []);
    
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
              <td><button onClick={()=>{deleter(row.id)}}>Delete</button></td>
              <td><button onClick={()=>{editer(row.id)}}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
