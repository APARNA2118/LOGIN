import { Button, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';

const StateBasics = () => {

    var[fname,setFname] = useState("APS");
    var[val,setVal] = useState();
    const handleInput = (e) => {
        console.log(e.target.value);
        setVal(e.target.value);
        console.log(val);
    }
    const submitHandler = () => {
        console.log("clicked");
    }
  return (
    <div>
        <Typography variant='h2'>
            WELCOME {fname}
        </Typography>  
        <br /><br />
        <TextField variant='outlined' onChange={handleInput} label='Type your name'/>
        <br /><br />
        <Button variant='contained' onClick={submitHandler}>Submit</Button>
    </div>
  );
}

export default StateBasics