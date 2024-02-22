import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Api = () => {
    var[user,setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((respose) => {
            console.log(respose.data);
            setUsers(respose.data);
        })
    },[]);
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val,ind) => {
                        return (
                            <TableRow>
                                <TableCell key={ind}>{val.name}</TableCell>
                                <TableCell key={ind}>{val.username}</TableCell>
                                <TableCell key={ind}>{val.address.city}</TableCell>
                            </TableRow>

                        )
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Api