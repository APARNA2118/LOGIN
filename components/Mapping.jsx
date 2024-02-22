import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {

    var [names,setNames] = useState([
        {'sname': 'Tony', 'age': '30'},
        {'sname': 'Bruce', 'age': '20'},
        {'sname': 'Maria', 'age': '10'}
        ]);
    
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'50px'}}>Names</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((val,ind)=>{
                        return(
                            <TableRow>
                                <TableCell>{val.sname}</TableCell>
                                <TableCell>{val.age}</TableCell>
                                
                            </TableRow>


                        )
                    })}


                    <TableRow>
                        
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Mapping