import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
//   const item={
//     userid:"",
//     password:""
//   };
  const [arr, setArr]= useState([]);
  const[userid, setuseid]= useState("");
    const [password, setPassword]=useState("");

    const handleUserid=(e)=>{
        setuseid(e.target.value);
    }
    
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }

    const navigate= useNavigate();
    const handleRegister=()=>{
        localStorage.setItem("user",JSON.stringify({userid,password} ));
       navigate('/');
    }

  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>UserId</Form.Label>
      <Form.Control  placeholder="Enter UserId" onChange={handleUserid} value={userid} />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control  placeholder="Password" onChange={handlePassword} />
    </Form.Group>
   
    <Button variant="primary" type="submit" onClick={handleRegister}>
      Register
    </Button>
    
  </Form>
  )
}
