import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaCogs } from "react-icons/fa";


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>

                <div>  <Navbar.Brand href="#home"><FaCogs ></FaCogs> ROBOTICS & AI</Navbar.Brand></div>

                <div><Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">

                        <Link className='pe-3 ' to='/course'>Course</Link>
                        <Link className='pe-3' to="/blog">Blog</Link>
                        <Link className='pe-3' to='/login'>Log </Link>
                        <Link className='pe-3' to="/them">Theme</Link>
                        <Link className='pe-3' to="/faq" >FAQ</Link>

                    </Nav>
                </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;