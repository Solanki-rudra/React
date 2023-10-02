import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModelAddMedicine(props) {
  let forEditData = props.forEditData
  const [isExpiry, setIsExpiry] = useState({isDate:false,isDay:false});
  const [batchNumber, setBatchNumber] = useState('');
  const [medicine_data, setMedicine_data] = useState(forEditData || {medicine:'',rack:'',batch:'',quantity:'',expiry:''});

  const handleClose = () => {
    props.onHide()
    resetData()
  } 

  function resetData() {
    setMedicine_data({medicine:'',rack:'',batch:'',quantity:'',expiry:''})
    setIsExpiry({isDate:false,isDay:false})
    setBatchNumber('')
  }

  const handleSubmit =() => {
    console.log(forEditData)
    console.log(medicine_data)
    if(forEditData){

    }
    props.medicine_data(medicine_data)
    props.onHide()
    resetData()
    // console.log(medicine_data)
  }

  const handleOnChange =(value,id) =>{
    console.log(medicine_data)
    setMedicine_data({...medicine_data,[id]:value,batch:batchNumber})
  }

  const batchNumberArray =['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10']

  return (
    <div> 
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Medicine
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <form className='px-3'>
        <div className="row">
            <label htmlFor="medicine">Medicine</label>
            <input type="text" defaultValue={forEditData?forEditData.medicine:medicine_data.medicine} onChange={(e)=>handleOnChange(e.target.value,e.target.id)} id='medicine' />
        </div>
        <div className="row">
            <label htmlFor="rack">Rack</label>
            <select id="rack" defaultValue={forEditData?forEditData.rack:0} onChange={(e)=>handleOnChange(e.target.value,e.target.id)} onClick={(e)=>setBatchNumber(batchNumberArray[Number(e.target.value)-1])}>
                <option value={0} disabled selected>--select rack--</option>
                <option value={1}>id-1 rack-1</option>
                <option value={2}>id-2 rack-2</option>
                <option value={3}>id-3 rack-3</option>
                <option value={4}>id-4 rack-4</option>
                <option value={5}>id-5 rack-5</option>
                <option value={6}>id-6 rack-6</option>
                <option value={7}>id-7 rack-7</option>
                <option value={8}>id-8 rack-8</option>
                <option value={9}>id-9 rack-9</option>
                <option value={10}>id-10 rack-10</option>
            </select>
        </div>
        <div className="row">
            <label htmlFor="batch">Batch</label>
            <input type="text" defaultValue={forEditData?forEditData.batch:medicine_data.batch} onChange={(e)=>handleOnChange(e.target.value,e.target.id)} id='batch' value={batchNumber} disabled readOnly className="bg-slate-400"/>
        </div>
        <div className="row">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" defaultValue={forEditData?forEditData.quantity:medicine_data.quantity} onChange={(e)=>handleOnChange(e.target.value,e.target.id)} id='quantity'/>
        </div>
        {/* <div className="row">
            <label>Expiry</label>
            <div className="col">
              <input type="radio" name='expiry' id="byDate" onClick={(e) => {setIsExpiry({isDate:e.target.checked,isDay:!e.target.checked})}}/>
              <label htmlFor="byDate">By Date</label>
            </div>
            <div className="col">
              <input type="radio" name='expiry' id="byDay" onClick={(e) => {setIsExpiry({isDay:e.target.checked,isDate:!e.target.checked})}}/>
              <label htmlFor="byDay">By Day</label>
            </div>
        </div>
        <div className="col" style={{display:isExpiry.isDate?'block':'none'}}>
            <label htmlFor="expiryDate" className='mr-3'>Expiry Date:</label>
            <input type="date" className='w-75 p-1' id='expiryDate'/>
        </div>
        <div className="row" style={{display:isExpiry.isDay?'flex':'none'}}>
            <label htmlFor="expiryDate" className='mr-3'>Manufacture Date:</label>
            <input type="date" className='col p-1 m-1' id='expiryDate'/>
            <input type="number" placeholder='Enter days for expiry' className='col m-1 p-1' id='expiryDate'/>
        </div> */}
        <div className="row my-2">
          <Button className='col' onClick={handleSubmit}>{forEditData?'Update':'Submit'}</Button>
          <Button className='col' onClick={handleClose}>Close</Button>
        </div>
        </form>
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default ModelAddMedicine
1