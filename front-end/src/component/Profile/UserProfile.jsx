import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

const UserProfile = () => {
    const handleLogout = () => {
    }
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
        <div className='flex flex-col items-center justify-center'>
            <AccountCircleIcon sx={{fontSize:'10rem'}}/>
            <h1 className='text-3xl font-semibold'>Van Duong</h1>
            <p>Email: duong@mail</p>
            <Button variant='contained' onClick={handleLogout} sx={{margin:'2rem 0rem'}}>Logout</Button>
        </div>
    </div>
  )
}

export default UserProfile