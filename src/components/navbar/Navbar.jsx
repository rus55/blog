import React from 'react'
import {Container, Image, Nav, Navbar, Offcanvas} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css';
import avatar from '../../assets/images/avatar.png'
import {Link} from "react-router-dom";

const HeaderNavbar = () => {
    return (
        <Navbar bg="light" expand="false">
            <Container fluid>
                <Navbar.Brand><Image className="avatar" roundedCircle src={avatar} alt="Avatar"/></Navbar.Brand>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Item>
                            <Nav.Item>Frontend Developer</Nav.Item>
                            <Nav.Item>r-mit@mail.ru</Nav.Item>
                        </Nav.Item>
                    </Nav>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-false`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to={"/"} eventKey="1">List of posts</Nav.Link>
                            <Nav.Link as={Link} to={"/about"} eventKey="2">About me</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default HeaderNavbar