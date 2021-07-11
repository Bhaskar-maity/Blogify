import React from "react";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";

export const NavBar = () => {
   return (
      <div>
         <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ml-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#features">Features</Nav.Link>
               <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
         </Navbar>
      </div>
   );
};
