import React from 'react'
import {Navbar,Nav,Container  } from 'react-bootstrap';


function NavBar() {
    return (
        <div className="navbar">
    <Navbar bg="light" expand="lg">
    <Container fluid className="container" >
        <Navbar.Brand href="#"><span className="Netflix">Netflix</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#action1"> <span className="classe">Acceuil</span></Nav.Link>
            <Nav.Link href="#action2"> <span className="classe">Movies</span></Nav.Link>
            <Nav.Link href="#action2"> <span className="classe">Series</span></Nav.Link>
            <Nav.Link href="#action2"><span className="classe">Recently Added</span></Nav.Link>
        </Nav>

        </Navbar.Collapse>
    </Container>
    </Navbar>
        </div>
    )
}

export default NavBar
