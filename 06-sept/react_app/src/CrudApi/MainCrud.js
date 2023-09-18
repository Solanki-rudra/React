// cmd --> npx json-server -p 3331 -w db.json
import Form from './Form';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from './Table';
const url = 'http://localhost:3331/comments/';

function MainCrud() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setForEditObj(null)
  };
  const [arrOfAllData, setArrOfAllData] = useState([]);
  const [forEditObj, setForEditObj] = useState(null);

  useEffect(() => {
    console.log("object")
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setArrOfAllData(data)
        } catch (error) {
          alert(error.message);
        }
      };
       fetchData();
    }, []);

async function clickOnSubmit(objOfData){
  // console.log('submit')
  try{
    let response = await fetch(url,{
      method : 'POST',
      body : JSON.stringify(objOfData),
      headers : {
          'Content-Type': 'application/json',
      }
    })
      let data = await response.json()
      setArrOfAllData((pv)=>[...pv,data])
   }catch(error){
       alert(error);
   }
   setShow(false)
}

async function clickOnUpdate(objOfData){
  console.log('update')
  try{
    let response = await fetch(url+(objOfData.id),{
      method : 'PATCH',
      body : JSON.stringify(objOfData),
      headers : {
          'Content-Type': 'application/json',
      }
    })
      // let data = await response.json()
      // setArrOfAllData(pv => [...pv,data])
  }catch(error){
     console.log(error)
      alert(error);
  }
  try{
    let response = await fetch(url)
    let data = await response.json()
    // console.log(data)
    setArrOfAllData(data)
  }
    catch(err){
    alert(err.message)
  }
   setShow(false)
}

async function handleDelete(id){
  try{
    let a = await fetch(url+id,{
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json",
       }
    })
  }catch(err){
    alert(err.message)
  }
  try{
    let response = await fetch(url)
    let data = await response.json()
    // console.log(data)
    setArrOfAllData(data)
  }
  catch(err){
    alert(err.message)
  }
}
async function handleEdit(id){
  try{
    let a = await fetch(url+id)
    let data = await a.json()
    // console.log(data)
    setForEditObj(data)
    setShow(true)
  }catch(err){
    alert(err.message)
  }
}
  return (
    <> 
      <Button variant="primary" className='m-3 bg-black border-0 ' onClick={handleShow}>
        Add Data
      </Button>
      <Modal className='model' show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form submitPress={clickOnSubmit} updatePress={clickOnUpdate} forEditObj={forEditObj}/>
        </Modal.Body>
      </Modal>
      <Table arrOfAllData={arrOfAllData} forDelete={handleDelete} forEdit={handleEdit}/>
    </>
  );
}

export default MainCrud;