import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Form, Button,} from 'react-bootstrap';
import logo1 from '../image/logo1.png';

class Navigation extends React.Component {
    render() {
        return (

   <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home"><img src={logo1} /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Gallery</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Contacts</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

        );
    }
}

export default Navigation;
