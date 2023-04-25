import classes from './Contact.module.css';
import React, { useState, useRef } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
const ContactUs = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();
    async function DetailsSubmitHandler(event) {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const phone = phoneInputRef.current.value;
        const userObj = { name: name, email: email, phone: phone }

        try {
            await axios.post('https://react-app-cd331-default-rtdb.firebaseio.com/users.json', userObj)
            setShowSuccessMessage(true);
            nameInputRef.current.value = '';
            emailInputRef.current.value = '';
            phoneInputRef.current.value = '';

        } catch (err) {
            alert(err.message)
        }
    }

    return (<>
        <div className={classes.container} >
            <h1 >Contact Us</h1>
            <p>We'd love to get in touch and learn more about you. So, send us your details and we'll reply as fast as we can.</p>
            <Form className={classes.form} onSubmit={DetailsSubmitHandler} >
                {showSuccessMessage && (
                    <Alert variant="success">
                        Your form was submitted successfully!
                    </Alert>
                )}
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" ref={nameInputRef} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailInputRef} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="phone" ref={phoneInputRef} />
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </>
    )
}
export default ContactUs;