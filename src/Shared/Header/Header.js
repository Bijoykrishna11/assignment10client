import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div>  <Navbar.Brand href="#home">ROBOTICS & AI</Navbar.Brand></div>

                <div><Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">

                        <Link href="#home">Course</Link>
                        <Link href="#link">FAQ</Link>
                        <Link href="#link">Blog</Link>
                        <Link href="#link">Them</Link>
                        <Link to='/login'>Log </Link>


                    </Nav>
                </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;