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

                        <Link className='pe-3 ' to='/course'>Course</Link>
                        <Link className='pe-3' to="/blog">Blog</Link>
                        <Link className='pe-3' to='/login'>Log </Link>
                        <Link className='pe-3' href="#link">Them</Link>
                        <Link className='pe-3' >FAQ</Link>

                    </Nav>
                </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;