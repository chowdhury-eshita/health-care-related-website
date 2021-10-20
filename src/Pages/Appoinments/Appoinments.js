import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



const Appoinments = () => {
    const [validated, setValidated] = useState(false);
    let history = useHistory();

    const handleSubmit = (event) => {
        history.push("/successful");
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="my-5 py-5 container">
            <h1 className="pb-3 text-primary d-flex align-items-start">Please fillup the form</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="3" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue=""
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue=""
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Email" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone No" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Number.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>Doctors Name</Form.Label>
                        <Form.Control type="text" placeholder="Doctors Name" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Name.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Address.
                        </Form.Control.Feedback>
                        <Button className="mt-3" type="submit">Submit form</Button>
                    </Form.Group>
                </Row>
            </Form>
        </div>
    );
};

export default Appoinments;