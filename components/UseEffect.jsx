import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  var[fname,setFname] = useState();
  const inputHandler = (e) => {
    console.log("changed");
    setFname(e.target.name)
    }

    /*useEffect(()=> {
      setFname("React");
    },[])
    useEffect(()=> {
      setFname("Angular");
    },[])
    useEffect(()=> {
      setFname("Next");
    },[])
    */

    return (
    <div>
      <br /><br />
      <Typography variant="h1">Welcome to {fname}</Typography>
      <br />
      <Button variant="text" onClick={inputHandler} color='error'>React</Button>
      <br /><br />
      <Button variant="text" onClick={inputHandler} color='info'>Angular</Button>
      <br /><br />
      <Button variant="text" onClick={inputHandler} color='success'>Next</Button>

    </div>
  )
}

export default UseEffect