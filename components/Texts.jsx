import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Texts = () => {
    var[inp,setInp] = useState (['hii'])
    var[data,setData] = useState ('');
    const handleInput = (e) => {
        console.log('on')
        setData(e.target.value)
        console.log('inp',data)
    }
    const add = () => {
        console.log('c')
        setInp([...inp,data]);
        console.log('sub',inp)
        setData('');
    }

  return (
    <div style={{margintop:'50px'}}>
        <br /><br /><br />
        <TextField variant='standard' onChange={handleInput} value={data} label='Enter your Name'></TextField>
        <br /><br />

        <Button variant='text' onClick={add}>SUBMIT</Button>
        <ul>        
            {inp.map((val,ind) =>{
            return (
                <li key={ind}>{val}</li>
            )
        })}

        </ul>

        {/* <TextField variant='outlined' onChange=></TextField> */}

    </div>
  )
}

export default Texts