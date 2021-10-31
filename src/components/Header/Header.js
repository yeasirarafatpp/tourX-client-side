import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Tour X</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                        </Nav>
                        {
                            user.email ? <div>
                                <div className="d-flex">
                                    <Nav>
                                        <Nav.Link as={Link} to="/addDestination">Add Destination</Nav.Link>
                                        <Nav.Link as={Link} to="/myPlace">My Place</Nav.Link>
                                    </Nav>
                                    <Navbar.Text>
                                        [ Signed in as: {user.displayName}]
                                    </Navbar.Text>
                                    <button
                                        className="btn btn-info"
                                        onClick={logOut}>Logout
                                    </button>
                                </div>
                            </div>
                                :
                                <Nav>
                                    <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;