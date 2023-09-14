import { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import dayjs from 'dayjs';

function Form1(props) {
  let forEdt_data = props.forEdt_data
  const [validated, setValidated] = useState(false);
  const [batchNumber, setBatchNumber] = useState('');
  const [objOfMedicineData, setObjOfMedicinData] = useState(forEdt_data || {medicine:'', qty: '', expiry:'', rack:'', batch:''});
  const [radioDate, setRadioDate] = useState(!!forEdt_data);
  const [radioDay, setRadioDay] = useState(false);
  const [expiry_days, setExpiry_days] = useState(null);
  const [manufactureDate, setManufactureDate] = useState(null);
  const [isValidate, setIsValidate] = useState(true);

  const handleExpiryForDate = () => {
    setRadioDate(true)
    setRadioDay(false)
  }
  const handleExpiryForDay = () => {
    setRadioDay(true)
    setRadioDate(false)
  }
  let arr_betchnumber = ['A1','A2','A3','A4','A5','A6','A7','A8'] 
  const updateBetchNumber = (e) => {
      e.target.value != 0 ? setBatchNumber(arr_betchnumber[e.target.value-1]) : setBatchNumber('')
      setObjOfMedicinData({...objOfMedicineData,batch:arr_betchnumber[e.target.value-1]})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    props.forDuplicateMedicine(objOfMedicineData.medicine)
    if(manufactureDate){
      console.log(manufactureDate,expiry_days)
      let newExpiry = dayjs(manufactureDate).add(expiry_days , 'day').format('YYYY-MM-DD')
      // console.log(newExpiry)
      objOfMedicineData.expiry = newExpiry
      // setObjOfMedicinData(pv=>({...pv,expiry:newExpiry}))
      // console.log(objOfMedicineData.expiry)
      // props.dataOfObject(objOfMedicineData)
    }
    // if (!isValidate) {
    //   // setIsValidate(true)
    //   alert('Medicine already available')
    // }else{
    //   setValidated(true);
    //   props.dataOfObject(objOfMedicineData)
    // }
    props.dataOfObject(objOfMedicineData)
    setValidated(true);
    
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group  md="4" controlId="validationCustom01">
          <Form.Label>Medicine</Form.Label>

          <Form.Control required type="text" defaultValue={forEdt_data?forEdt_data.medicine:objOfMedicineData.medicine} onChange={(e) => {setObjOfMedicinData({...objOfMedicineData,medicine:e.target.value})}} />

        </Form.Group>
        <Form.Group  md="4" controlId="validationCustom02">
          <Form.Label>Rack</Form.Label>

          <Form.Select size="lg" defaultValue={forEdt_data?forEdt_data.rack:0} onClick={updateBetchNumber}  onChange={(e) => {setObjOfMedicinData({...objOfMedicineData,rack:e.target.value})}} >
            
            <option disabled value={0}>--Select rack--</option>
            <option value='1'>id-1 batch-A1</option>
            <option value='2'>id-2 batch-A2</option>
            <option value='3'>id-3 batch-A3</option>
            <option value='4'>id-4 batch-A4</option>
            <option value='5'>id-5 batch-A5</option>
            <option value='6'>id-6 batch-A6</option>
            <option value='7'>id-7 batch-A7</option>
            <option value='8'>id-8 batch-A8</option>
          </Form.Select>
        </Form.Group>
        <Form.Group md="4" controlId="validationCustomUsername">
          <Form.Label>Batch Number</Form.Label>
            <Form.Control
              type="text"
              disabled
              value={forEdt_data?forEdt_data.batch:batchNumber}
            />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group md="6" controlId="validationCustom03">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" defaultValue={forEdt_data?forEdt_data.qty:objOfMedicineData.qty}  required  onChange={(e) => {setObjOfMedicinData({...objOfMedicineData,qty:e.target.value})}} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Quantity.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group md="6">
          <Form.Label>Expiry By</Form.Label>
          <Form.Group className="row mx-2 mb-2">
              <Form.Check 
              className="col-6"
                type='radio'
                id={`By Date`}
                label={`By Date`}
                name={'date'}
                onClick={handleExpiryForDate}
                defaultChecked={!!forEdt_data}
              />
              <Form.Check 
              className="col-6"
                type='radio'
                id={`By Day`}
                label={`By Day`}
                name={'date'}
                onClick={handleExpiryForDay}
              />
              </Form.Group>

          <Form.Control type='date' id='byDate' min={dayjs()} defaultValue={forEdt_data?forEdt_data.expiry:objOfMedicineData.expiry} style={{display: radioDate ? 'block' : 'none'}} onChange={(e) => {setObjOfMedicinData({...objOfMedicineData,expiry:e.target.value})}} required/>

          <Form.Group id='byDay'  className="row m-1 d-flex">
              <Form.Control style={{display: radioDay ? 'block' : 'none'}} type='date' className="w-50" onChange={(e) => setManufactureDate(e.target.value)} required/>

              <Form.Control style={{display: radioDay ? 'block' : 'none'}} type='number' className="w-50 ml-1" onChange={(e) => setExpiry_days(e.target.value)}required/>
          </Form.Group>

         <Form.Control.Feedback type="invalid">
            Please provide a valid Expiry.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" >{forEdt_data ? 'Update Medicine' : 'Add Medicine' }</Button>
    </Form>
  );
}

export default Form1;
