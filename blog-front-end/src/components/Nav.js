import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
export const NavBar = () => {
   return (
      <Navbar bg="dark" variant="dark">
         <div className="container">
            <Navbar.Brand href="/">Bhaskar's Blogs</Navbar.Brand>
            <Nav className="ml-auto">
               <Link className="link" to="/">
                  <AccountCircleIcon />
               </Link>
               <Link className="link" to="/create">
                  Create
               </Link>
               <Link className="link" to="/login">
                  Login
               </Link>
               <Link className="link" to="/register">
                  Register
               </Link>
               <Link className="link" to="/logout">
                  Logout
               </Link>
            </Nav>
         </div>
      </Navbar>
   );
};
