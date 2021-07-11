import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const NavBar = () => {
   return (
      <Navbar bg="dark" variant="dark">
         <div className="container">
            <Navbar.Brand href="#home">Blogs</Navbar.Brand>
            <Nav className="ml-auto">
               <Nav.Link href="#home">
                  <AccountCircleIcon />
               </Nav.Link>
               <Nav.Link href="#features">Login</Nav.Link>
               <Nav.Link href="#pricing">Logout</Nav.Link>
            </Nav>
         </div>
      </Navbar>
   );
};
