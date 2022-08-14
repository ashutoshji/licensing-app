import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

const initialState = {
    name: '', 
    nric: '',
    dob: '',
    contactNo: '',
    dateOfActivity: ''
}

function TextControlsExample() {
  const [eachEntry, setEachEntry] = useState({...initialState});
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { name, nric, dob, contactNo, dateOfActivity } = eachEntry;

  const handleOnChange = e => {
    setEachEntry({...eachEntry, [e.target.name]: e.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!eachEntry.name && !eachEntry.nric && !eachEntry.dob && !eachEntry.contactNo && !eachEntry.dateOfActivity) {
        setShowAlert(true);
        return false;
    }
    setShowAlert(false);
    console.log(eachEntry);
    setEachEntry({ ...eachEntry });
    setShow(true);
    setModalShow(true);
  }

  const resetButton = (event) => {
    event.preventDefault();
    setEachEntry({ ...initialState});
  }

  return (
    <Container fluid className="project-section">
         <Container>
         {showAlert && <Alert variant={"warning"}>
          Please enter all details
        </Alert>}
    <Form className="mb-3">
    <Form.Group controlId="formName" className='text-left'>
            <Form.Label className="label">Name</Form.Label>
            <Form.Control 
            onChange={handleOnChange}
            value={name}
            name="name"
            type="text"
            placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formNRIC" className='text-left'>
            <Form.Label className="label">NRIC</Form.Label>
            <Form.Control className="mb-3"
            onChange={handleOnChange}
            value={nric}
            name="nric"
            type="text"
            placeholder="Enter your NRIC" />
        </Form.Group>
        <Form.Group controlId="formDob" className='text-left'>
            <Form.Label className="label">Date of Birth</Form.Label>
            <Form.Control
            onChange={handleOnChange}
            value={dob}
            name="dob"
            type="date"
            placeholder="Enter your Date of Birth" />
        </Form.Group>
        <Form.Group controlId="formContactNo" className='text-left'>
            <Form.Label className="label">Contact No</Form.Label>
            <Form.Control
            onChange={handleOnChange}
            value={contactNo}
            name="contactNo"
            type="text"
            placeholder="Contact No" />
        </Form.Group>
        <Form.Group controlId="formDateOfActivity" className='text-left'>
            <Form.Label className="label">Date of Activity</Form.Label>
            <Form.Control
            onChange={handleOnChange}
            value={dateOfActivity}
            name="dateOfActivity"
            type="date"
            placeholder="Date of Activity" />
        </Form.Group>

      <Button variant="primary" onClick={handleSubmit}>Submit</Button>{' '}
      <Button variant="primary" onClick={resetButton}>Reset</Button>{' '}
    </Form>
    {modalShow && <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit</Modal.Title>
        </Modal.Header>
        <Modal.Body>Applications was submitted successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>}
    </Container>
    </Container >
  );
}

export default TextControlsExample;
