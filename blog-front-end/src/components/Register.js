import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from "axios";

export const Register = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   function validateForm() {
      return email.length > 0 && password.length > 0;
   }

   const handleSubmit = async (event) => {
      event.preventDefault();
      const res = await axios.post("/auth/register", {
         email,
         password,
      });
      res.data && window.location.replace("/login");
   };

   return (
      <div className="Login">
         <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
               <Form.Label>Email</Form.Label>
               <Form.Control
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
               <Form.Label>Password</Form.Label>
               <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
               Register
            </Button>
         </Form>
      </div>
   );
};
