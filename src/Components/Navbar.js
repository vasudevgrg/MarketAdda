import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { useNavigate } from 'react-router-dom';

export const Navbar1 = () => {
  const {theme, changeTheme}= useContext(ThemeContext);
  const isDark= theme==="dark";

  const changebg=()=>{
    if(theme=="dark"){
      changeTheme("light");
    }else{
      changeTheme("dark");
    }
  }
  // const nav= useNavigate();

  return (
    <Navbar  bg={(isDark)?"dark":"light"} data-bs-theme={(isDark)?"dark":"light"} >
      <Container >
        <Navbar.Brand href="#home">Market-Adda</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#features">Products</Nav.Link>
            
          </Nav>
          <Nav>
            <Button bg="dark" onClick={changebg}> Change Theme</Button>
            <Nav.Link href="#deets">Logout</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

