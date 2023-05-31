import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from '../../assets/images/avatar.png'

const HeaderNavbar = () => {
    return (
        <Navbar sticky="top" expand="false" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="-navbar-nav" className="order-md-1 order-0"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link className="menuLink" eventKey={1}>
                                <img src={avatar} alt="Avatar" className="img-thumbnail"/>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='text-danger'>
                            Frontend Developer
                        </Nav.Item>
                        <Nav.Item className='text-primary'>
                            r-mit@mail.ru
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="menuLink" eventKey={2}>
                                <NavLink className="text-light menuText" to="/">List of posts</NavLink>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="menuLink" eventKey={3}>
                                <NavLink className="text-light menuText" to="/about">About me</NavLink>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderNavbar