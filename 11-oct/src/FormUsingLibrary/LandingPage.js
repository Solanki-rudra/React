import React,{useState,useEffect, useReducer} from 'react'
import { 
    Link,
    useNavigate
 } from "react-router-dom";
import TableForData from './TableForData';
import Notification from './Notification';
import ConfirmationModel from './ConfirmationModel';
const url = 'http://localhost:3200/comments/'

function LandingPage() {
  const [dataForPrint, setDataForPrint] = useState([]);
  const navigate = useNavigate()
  // const [notification, dispatch] = useReducer(reducer,[])
  const [showNotification, setShowNotification] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState(null);
  useEffect(() => {
    getDataFromApi()
  }, []);
  async function getDataFromApi() {
    try {
      let response = await fetch(url)
      let data= await response.json()
      setDataForPrint(data)
      // setShowNotification(true)
    } catch (error) {
      alert(error.message)
    }
  }
  async function handleDelete() {
    try {
      let response = await fetch(url+deleteConfirmationId,{
        method: 'DELETE',
        headers:{
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        getDataFromApi()
        setShowNotification(true)
      }
    } catch (error) {
      setShowNotification(true)
    }
    setDeleteConfirmationId(false)
  }

  async function handelEdit(id){
    navigate('/register/'+id)
    // try {
    //   let response = await fetch(url+id)
      
    // } catch (error) {
      
    // }
  }

  return (
    <div>
       {/* <Link to='/add' className='btn bg-warning' >Add Data</Link> */}
       <Link to='/register' className='btn bg-warning' >Register</Link>
       <Notification message={'add'} show={showNotification} stayTimeInMs={5000} />
       <ConfirmationModel title='Are you sure for delete data?' onConfirm={handleDelete} onCancel={()=>{setDeleteConfirmationId(null)}} show={deleteConfirmationId}/>
       {/* <CommonNotification /> */}
       <TableForData dataForPrint={dataForPrint} forDeleteId={(id)=>setDeleteConfirmationId(id)} forEditId={handelEdit}/>
    </div>
  )
}

export default LandingPage
