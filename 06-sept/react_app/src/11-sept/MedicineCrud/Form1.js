import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function Form1() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group  md="4" controlId="validationCustom01">
          <Form.Label>Medicine</Form.Label>
          <Form.Control required type="text" />
        </Form.Group>
        <Form.Group  md="4" controlId="validationCustom02">
          <Form.Label>Rack</Form.Label>
          <Form.Select size="lg">
            <option selected disabled value={0}>--Select rack--</option>
            <option>id-1 batch-A1</option>
            <option>id-2 batch-A2</option>
            <option>id-3 batch-A3</option>
            <option>id-4 batch-A4</option>
            <option>id-5 batch-A5</option>
            <option>id-6 batch-A6</option>
            <option>id-7 batch-A7</option>
            <option>id-8 batch-A8</option>
          </Form.Select>
        </Form.Group>
        <Form.Group md="4" controlId="validationCustomUsername">
          <Form.Label>Batch Number</Form.Label>
            <Form.Control
              type="text"
              disabled
            />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group md="6" controlId="validationCustom03">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Quantity.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group md="6" controlId="validationCustom03">
          <Form.Label>Expiry By</Form.Label>
            <div className="row d-flex">
                <div className="row">
                    <Form.Check 
                        type='radio'
                     />
                     <Form.Label>By Date</Form.Label>
                </div>
                <div className="row">
                    <Form.Check 
                        type='radio'
                     />
                     <Form.Label>By Day</Form.Label>
                </div>
            </div>
          <Form.Control type="radio" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Quantity.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default Form1;
