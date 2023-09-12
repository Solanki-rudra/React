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
  const [objOfData, setObjOfData] = useState({medicine:'', qty: '', expiry:'', rack:'', batch:''});
  let a = dayjs();

  // useEffect(() => {
  //   document.querySelector('#byDate').style.display = 'none'
  //   document.querySelector('#byDay').style.display = 'none'
  // }, []);

  // function radioDate() {
  //   document.querySelector('#byDay').style.display = 'none'
  //   document.querySelector('#byDate').style.display = 'block'
  // }
  // function radioDay() {
  //   document.querySelector('#byDate').style.display = 'none'
  //   document.querySelector('#byDay').style.display = 'block'
  // }

  // if (forEdt_data !== null) {
  //   document.querySelector('#medicine').value = forEdt_data.medicine
  // }

  const updateBetchNumber = (e) => {
      e.target.value != 0 ? setBatchNumber("A"+e.target.value) : setBatchNumber('')
      setObjOfData({...objOfData,batch:"A"+e.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    props.dataOfObject(objOfData)
    setValidated(true);

  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group  md="4" controlId="validationCustom01">
          <h1> {a.hour()}</h1>
          <Form.Label>Medicine</Form.Label>
          <Form.Control required type="text" onChange={(e) => {setObjOfData({...objOfData,medicine:e.target.value})}} />
        </Form.Group>
        <Form.Group  md="4" controlId="validationCustom02">
          <Form.Label>Rack</Form.Label>
          <Form.Select size="lg" defaultValue={0} onClick={updateBetchNumber}  onChange={(e) => {setObjOfData({...objOfData,rack:e.target.value})}}>
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
              value={batchNumber}
              // onChange={(e) => {setObjOfData({...objOfData,batch:e.target.value})}}
            />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group md="6" controlId="validationCustom03">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number"  required  onChange={(e) => {setObjOfData({...objOfData,qty:e.target.value})}} />
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
                onClick={radioDate}
              />
              <Form.Check 
              className="col-6"
                type='radio'
                id={`By Day`}
                label={`By Day`}
                name={'date'}
                onClick={radioDay}
              />
              </Form.Group>
          <Form.Control type='date' id='byDate' onChange={(e) => {setObjOfData({...objOfData,expiry:e.target.value})}} required/>
          <Form.Group id='byDay' className="row m-1 d-flex ">
              <Form.Control type='date' className="w-50 " onChange={(e) => {setObjOfData({...objOfData,expiry:e.target.value})}} required/>
              <Form.Control type='number' className="w-50 ml-1" onChange={(e) => {setObjOfData({...objOfData,expiry:e.target.value})}} required/>
          </Form.Group>
         <Form.Control.Feedback type="invalid">
            Please provide a valid Expiry.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" >Add Data</Button>
    </Form>
  );
}

export default Form1;
