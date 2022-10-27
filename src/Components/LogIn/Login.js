import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from "react-icons/fa";
import app from '../../firebase/firebase.config';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


const auth = getAuth(app);


const Login = () => {

    const [passError, setPassError] = useState('');
    const [user, setUser] = useState({})
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log('error:', error);
            })
    }

    const handesubmit = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        if (password.length < 8) {
            setPassError('password showed be  minimum 8 cracktor')
        }
        else {
            setPassError('')
        }


    }


    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.error(error)
            })
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
                <h3 className='text-danger'>{passError}</h3>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link className='text-decoration-none d-block' to="/register">If you did not sign in, Register now?</Link>
            </Form>
            <div className='ms-5 mt-5'>

                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-3'> <FaGoogle></FaGoogle> Sign In With google</Button>
                    <Button onClick={handleGithubSignIn} ><FaGithub></FaGithub> Sign In With Github</Button>
                </ButtonGroup>
            </div>

        </div>
    );
};

export default Login;