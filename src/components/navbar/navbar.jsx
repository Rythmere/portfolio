import React from "react";
import  Navbar  from "react-bootstrap/Navbar";
import Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navbar.css'

export function NavBar() {
    return (
        <Navbar className="main-nav" fixed="top" bg='dark' expand='lg' variant='dark'>
            <Container className="container-nav">
            <Navbar.Brand className='navbar-logo' href='/portfolio/'>Brice Douvier-Gore</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="ml-auto">
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/about'>About</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
              {/*  <Nav.Link href="/portfolio/contact">Contact</Nav.Link> */}
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}