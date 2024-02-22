import React from 'react'
import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const Counter = () => {

    var[count,setCount] = useState(0);
    const add = () => {
        console.log("add button clicked");
        setCount(count+1);
        
    }
    const sub = () => {
        console.log("sub button clicked");
        setCount(count-1);
        
    }

  return (
    <div>
        <br /><br /><br />
        <Typography variant="h3">Counter:{count}</Typography>
        <br /><br />
        <Button variant="contained" color='success' onClick={add}>+</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color='error' onClick={sub}>-</Button>

    </div>
  )
}

export default Counter