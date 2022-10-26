import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Register from '../Register/Register';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Login = () => {

    const handesubmit = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
    }
    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handesubmit} className='w-50 ' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link className='text-decoration-none d-block' to="/register">If you did not sign in, Register now?</Link>
            </Form>
            <div className='ms-5 mt-5'>

                <ButtonGroup vertical>
                    <Button className='mb-3'>Sign In With google</Button>
                    <Button>Sign In With Github</Button>
                </ButtonGroup>
            </div>

        </div>
    );
};

export default Login;