import React,{useEffect, useState,createContext} from 'react'
import {Link} from 'react-router-dom'
import TableForData from './TableForData'
import ConfirmationModel from './ConfirmationModel';


const url= 'http://localhost:3100/comments/'


function LandingaPage() {
    const [dataForTable, setDataForTable] = useState([]);
    const [idForDelete, setIdForDelete] = useState(null);

    useEffect(() => {
        getDataFromApi()
    }, []);

    async function getDataFromApi() {
        try {
            let response = await fetch(url)
            let data = await response.json()
            setDataForTable(data)
        } catch (error) {
            alert(error.message)   
        }
    }

    async function handleConfirmForDelete() {
        try {
            let response = await fetch(url+idForDelete,{
                method:'DELETE',
                headers : {
                    "Content-Type": "application/json"
                }
            })
            getDataFromApi()
            setIdForDelete(null)
        } catch (error) {
            alert(error.message)
        }
    }
  return (
    <div className='p-3'>
        <Link to='/add' className='btn bg-warning my-3'>Add user</Link>
        <ConfirmationModel title='Are you sure for Delete data?' show={idForDelete != null} onConfirm={handleConfirmForDelete} onCancel={()=>{setIdForDelete(null)}}/>
        <TableForData dataForTable={dataForTable} deleteId={(id)=>setIdForDelete(id)}  />
    </div>
  )
} 

export default LandingaPage
