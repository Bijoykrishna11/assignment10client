import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Form className='w-50 ' >

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label >Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImg">
                    <Form.Label>ImgURL</Form.Label>
                    <Form.Control name='img' type="text" placeholder="Img-url" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>



                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link className='text-decoration-none d-block' to="/login">If you alrady Register, Go sign in now?</Link>
            </Form>
        </div>
    );
};

export default Register;