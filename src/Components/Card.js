
import React from 'react'

 export const Card = ({prop}) => {
    // console.log("here111");
  return (
    <div className='bg-light' style={{border:"7px solid grey"}}>
    <div  style={{display:"flex", flexDirection:"column", maxWidth:"250px", border:"3px dark grey"}}>
        <img src={prop.image} alt="" style={{height:"250px", width:"250px"}} />
        <h3  style={{overflow:"hidden"}}>{prop.title}</h3>
        <p>${prop.price}</p>
        <button>Add To Cart</button>
        {console.log(prop.title)}
    </div>
    </div>
  )
}

