import React,{useState,useEffect, useReducer} from 'react'
import { 
    Link,
    useNavigate
 } from "react-router-dom";
import TableForData from './TableForData';
import ConfirmationModel from './ConfirmationModel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const url = 'http://localhost:3200/comments/'

function LandingPage() {
  const navigate = useNavigate()
  const [dataForPrint, setDataForPrint] = useState([]);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState(null);
  const [isRunDelete, setIsRunDelete] = useState(false);

  useEffect(() => {
    getDataFromApi()
  }, []);

  async function getDataFromApi() {
    try {
      let response = await fetch(url)
      if (response.ok) {
        let data= await response.json()
        setDataForPrint(data)
      }else{
        throw new Error('Failed to get Data')
      }
    } catch (error) {
        toast.error(error.message,{
          position:'top-center',
          autoClose: 2000,
        });
    }
  }
  async function handleDelete() {
    if(!isRunDelete){
      setIsRunDelete(true)
      try {
        let response = await fetch(url+deleteConfirmationId,{
          method: 'DELETE',
          headers:{
            "Content-Type": "application/json"
          }
        });
        if (response.ok) {
          getDataFromApi()
          toast.success('Data deleted successfully',{
            position:'top-center',
            autoClose: 2000,
          });
        }else{
          throw new Error('Cant find data')
        }
      } catch (error) {
        toast.error(error.message,{
          position:'top-center',
          autoClose: 2000,
        });
      } 
      finally{
        setIsRunDelete(false)
        setDeleteConfirmationId(false)
      }
    }
  }
  
  return (
    <div>
       <Link to='/register' className='m-4 btn bg-warning' >Register</Link>
       <ConfirmationModel title='Are you sure for delete data?' onConfirm={handleDelete} onCancel={()=>{setDeleteConfirmationId(null)}} show={deleteConfirmationId}/>
       <TableForData dataForPrint={dataForPrint} forDeleteId={(id)=>setDeleteConfirmationId(id)} forEditId={(id)=>{navigate('/register/'+id)}}/>
    </div>
  )
}

export default LandingPage
