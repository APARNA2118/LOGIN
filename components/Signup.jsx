import { TextField, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {

    var[data,setData] = useState();
    const inputHandler = (e) => {
        //console.log("on");
        setData({...data,[e.target.name]:e.target.value}); //value in name is moved to value
        console.log(data);
        

    }
  return (
    <div>
        <br /><br /><br /><br />
        <Typography variant='h3'>Sign up</Typography>
        <br /><br /><br />
        <TextField variant='outlined' name='fname' onChange={inputHandler} label='Username'></TextField>
        <br /><br />
        <TextField variant='outlined' name='pswd' onChange={inputHandler} label='Password'></TextField>
        <br /><br />
        <TextField variant='outlined' name='email' onChange={inputHandler} label='E-mail'></TextField>
        <br /><br />
        <Button variant='contained' color='primary'>SIGN UP</Button>

    </div>
  )
}

export default Signup