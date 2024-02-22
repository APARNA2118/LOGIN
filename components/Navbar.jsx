import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant ='h6' sx={{ flexGrow: 1 }} align='left'>
                        APP
                    </Typography>
                    <Button >
                        <Link to='/' style={{color:'white'}}>LOGIN</Link>
                    </Button>
                    <Button >
                        <Link to='/sign' style={{color:'white'}}>SIGN UP</Link>
                    </Button>
                    <Button >
                        <Link to='/count' style={{color:'white'}}>COUNTER</Link>
                    </Button>
                    <Button >
                        <Link to='/tex' style={{color:'white'}}>LIST</Link>
                    </Button>
                    <Button >
                        <Link to='/tab' style={{color:'white'}}>TABLE</Link>
                    </Button>
                    <Button >
                        <Link to='/ap' style={{color:'white'}}>API</Link>
                    </Button>
                    <Button >
                        <Link to='/grd' style={{color:'white'}} >GRID</Link>
                    </Button>
                    <Button >
                        <Link to='/crd' style={{color:'white'}} >CARD</Link>
                    </Button>
                </Toolbar>
            </AppBar>

        </div>
        )
    }
    export default Navbar