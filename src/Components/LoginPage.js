import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {
    const[userid, setuseid]= useState("");
    const [password, setPassword]=useState("");
    const [valid, setValid]= useState(false);
    const nav= useNavigate();

const handleUserid=(e)=>{
    setuseid(e.target.value);
}

const handlePassword=(e)=>{
    setPassword(e.target.value);
}

const handleSubmit=(e)=>{
    e.preventDefault();
    // localStorage.setItem(userid, JSON.stringify(password));
    setuseid("");
    setPassword("");

    if(localStorage.getItem("user").userid===null){
        setValid(true);
        console.log("Wrong");
    }else{
       
        if(JSON.parse(localStorage.getItem("user")).password===password){
             console.log("hallalueah");
             nav("/movies");
        }else{
            console.log("Wrong Password");
            setValid(true);
        }
    }
    // console.log(userid, password);

}

const handleRegister=()=>{
   nav("/register");
}

  return (
    <div className='bg-light'>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserId</Form.Label>
        <Form.Control  placeholder="Enter UserId" onChange={handleUserid} value={userid} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  placeholder="Password" onChange={handlePassword} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit} style={{margin:"10px"}}>
        Login
      </Button>
      <Button variant="primary" type="click" onClick={handleRegister}>
        Register
      </Button>
      {
        valid && <h2> UserId and Password is not defined</h2>
      }
    </Form>
    </div>
  )
}
