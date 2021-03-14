import * as React from "react";
import {Nav, Navbar} from "react-bootstrap";


const Menu: React.FunctionComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">KNOH</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/posts">Posts</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;