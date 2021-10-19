import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar fixed="top" className="text-white" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fw-bold" href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Acme Health Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/about">About</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="primary">Logout</Button> :
                            <Nav.Link className="nav" as={Link} to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;