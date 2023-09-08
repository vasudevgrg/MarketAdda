import React, { useContext, useState } from 'react';
import {Card} from './Card';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { ThemeContext } from '../App';

export const Movies = () => {
    const[arr, setArr]= useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => setArr(data));
      }, []);
    const {theme}= useContext(ThemeContext);

      const isdark= theme==="dark";
    
  return (
    <div className={(isdark)?"bg-dark":"bg-light"}>
    <Container>
    <div  style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", padding:"10px"}}>{arr.map((e, idx)=>
        <Card prop={e} key={idx} />
    )
    }</div>
    </Container>
    </div>
  )
}



