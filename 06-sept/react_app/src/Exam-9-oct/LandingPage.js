import React,{useState,useEffect,createContext} from 'react'
import { 
    Link,
    useNavigate,
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
    // const [searchParams,setSearchParams] = useSearchParams()

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
        setEditConfShow(false)
        setDeleteConfShow(true)
        setIdForDelete(id)
    }

    async function handleEditId(id) {
        setDeleteConfShow(false)
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
        // setSearchParams({userId:objForEdit.id})
        // navigate(`/add?userId=${objForEdit.id}`,{state:objForEdit}) 
        navigate(`/add/${objForEdit.id}`) 
        setEditConfShow(false)
    }

    // function handleChangeForSearch(value) {
    //     let timer;
    //     clearTimeout(timer)
    //     timer = setTimeout(async () => {
    //         console.log(value)
    //         try {
    //             let response = await fetch(`${url}?q=${value}`)
    //             let data = await response.json()
    //             setArrOfData(data)
    //         } catch (error) {
    //             alert(error.message)
    //         }
    //     }, 500);
    // }

    function debounce(func, delay) {
        let timer;
        return function () {
          clearTimeout(timer);
          timer = setTimeout(() => {
            // console.log('this ' + this) //undefined
            func.apply(this, arguments);
          }, delay);
        };
      }
      const debouncedHandleChange = debounce(handleChangeForSearch, 300);

      async function handleChangeForSearch(value) {
        // console.log(value);
        try {
          let response = await fetch(`${url}?q=${value}`);
          let data = await response.json();
          setArrOfData(data);
        } catch (error) {
          alert(error.message);
        }
      }
      
 

    function handleConfCancel() {
        setEditConfShow(false)
        setDeleteConfShow(false)
        setObjForEdit(null)
    }
    const styling = {
        height : '100vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }
  return (
    <div className='position-relative bg-gray-600' style={styling}>
        <editObj.Provider value={objForEdit}>

            <div className='mt-4'>
              <input type="text" className='pl-2' onChange={(e)=>debouncedHandleChange(e.target.value)} placeholder='Search...' />
              <Link className='m-1 bg-warning p-2 rounded text-black text-decoration-none' onClick={()  =>setEditConfShow (null)} to='/add'>Add</Link>
            </div>

            <ModelConfirmation show={deleteConfShow} title='Are you sure for delete?' onConfirm={handleConfirmForDelete} onCancel={handleConfCancel}/>

            <ModelConfirmation show={editConfShow} title='Are you sure for edit?' onConfirm={handleConfirmForEdit}  onCancel={handleConfCancel}/>

            <Table arrOfData={arrOfData} deleteId={handleDeleteId} editId={handleEditId}/>

        </editObj.Provider>
    </div>
  )
}

export {editObj}
export default LandingPage