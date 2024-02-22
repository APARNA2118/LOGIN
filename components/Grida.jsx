import { CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Grida = () => {

  var[products,setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/students")
    .then((response) => {
      //console.log(response);
      setStudents(response.data);
    })
    .catch((error) => {console.log(error)})
  },[])
  return (
    <div style={{margin:'4%'}}>
        <br /><br /><br />      
        <Grid container spacing={2}>

            {products.map((val,ind) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                
                  <CardMedia
                    sx={{ height: 140 }}
                    image={val.image}
                    title={val.title}
                    description={val.description}
                  
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {val.description}
                    </Typography>
                  </CardContent>
                
                </Grid>

              )

            })}

            <Grid item xs={12} sm={6} md={4}>
                <TextField fullWidth variant='outlined' label='Item1'></TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField fullWidth variant='outlined' label='Item2'></TextField>
            </Grid>
        </Grid>

    </div>
  )
}

export default Grida