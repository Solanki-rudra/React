import React,{useState,useEffect,createContext} from 'react'
import { 
    Link,
    useNavigate
 } from "react-router-dom";
import Table from './Table';
import ModelConfirmation from './ModelConfirmation';

 
const editObj = createContext()
function LandingPage() {
    const navigate = useNavigate()
    const url = 'http://localhost:3500/comments/'
    const [arrOfData, setArrOfData] = useState([]);
    const [deleteConfShow, setDeleteConfShow] = useState(false);
    const [editConfShow, setEditConfShow] = useState(false);
    const [idForDelete, setIdForDelete] = useState(null);
    const [idForEdit, setIdForEdit] = useState(null);
    const [objForEdit, setObjForEdit] = useState(null);
    
    useEffect(() => {
        getDataFromApi()
    }, []);

    async function getDataFromApi() {
        try {
            let response = await fetch(url)
            let data = await response.json()
            console.log(data)
            setArrOfData(data)
            // console.log(arrOfData)
        } catch (error) {
            alert(error.message)
        }
    }

    function handleDeleteId(id) {
        setDeleteConfShow(true)
        setIdForDelete(id)
    }

    async function handleEditId(id) {
        // setIdForEdit(id)
        try {
            let response = await fetch(url+id)
            let data = await response.json()
            setObjForEdit(data)
            // console.log(data)
        } catch (error) {
            alert(error.message)
        }
        setEditConfShow(true)
    }

    async function handleConfirmForDelete() {
        try {
            let response = await fetch(url+idForDelete,{
                method :'DELETE',
                headers : {
                    'Content-Type':'application/json'
                }
            })
        } catch (error) {
            alert(error.message)
        }
        getDataFromApi()
        setDeleteConfShow(false)
    }

    async function handleConfirmForEdit(){
        // try {
        //     let response = await fetch(url+idForEdit)
        //     let data = await response.json()
        //     setObjForEdit(data)
        //     // console.log(data)
        // } catch (error) {
        //     alert(error.message)
        // }
        // console.log(objForEdit)
        navigate('/add',{replace:true,state:objForEdit}) 
        setEditConfShow(false)
    }

    function handleChangeForSearch(value) {
        let timer;
        clearTimeout(timer)
        timer = setTimeout(() => {
            if(value.trim() !== ''){
                let filterArr= arrOfData.filter((item)=>item.firstname.toLowerCase().includes(value.replaceAll(' ','').toLowerCase()))
                setArrOfData(filterArr)
            }else{
                getDataFromApi()
            }
        }, 300);
    }
    function handleEditCancel() {
        setEditConfShow(false)
        setObjForEdit(null)
    }

  return (
    <div>
        <editObj.Provider value={objForEdit}>

            <Link className='m-1 bg-black p-2' onClick={()=>setEditConfShow(null)} to='/add'>Add</Link>
            <input type="text" onChange={(e)=>handleChangeForSearch(e.target.value)} placeholder='Search...' />

            <ModelConfirmation show={deleteConfShow} title='Are you sure for delete?' onConfirm=    {handleConfirmForDelete} onCancel={()=>setDeleteConfShow(false)}/>

            <ModelConfirmation show={editConfShow} title='Are you sure for edit?' onConfirm={handleConfirmForEdit}  onCancel={handleEditCancel}/>

            <Table arrOfData={arrOfData} deleteId={handleDeleteId} editId={handleEditId}/>

        </editObj.Provider>
    </div>
  )
}

export {editObj}
export default LandingPage