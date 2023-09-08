import React from 'react'

export const Auth = (props) => {
    const isAuth= true;

    if(!isAuth){
        return <h1>You are Not logged In</h1>
    }
  return props.children;
  
}
