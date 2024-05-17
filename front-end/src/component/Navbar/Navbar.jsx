import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import './Navbar.css'
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../Auth/Auth';
import {   useSelector } from 'react-redux';


export const Navbar = () => {
    const {auth,cart}=useSelector(state=>state)

    const navigate=useNavigate()
    const handleAvatarClick=()=>{
        if(auth.user.role==='ROLE_CUSTOMER'){
            navigate('/profile')
        }
        if(auth.user.role==='ROLE_RESTAURANT_OWNER'){
            navigate('/admin/restaurant')
        }
    }
    const handleLogoClick=()=>{
        navigate('/')
    }
    return (


        <div>
            <Box className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#000000] lg:px-20 flex justify-between backdrop-blur-md'>



                <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                    <li onClick={handleLogoClick} className='logo font-semibold text-gray-300 text-2xl'>
                        FoodEase
                    </li>
                </div>
                <div className='flex items-center space-x-2 lg:space-x-10'>
                    <div className=''>
                        <IconButton>
                            <SearchIcon sx={{ fontSize: "1.5rem" }} />  
                        </IconButton>
                    </div>



                    <div className=''>
                        {auth.user?<Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: 'black' }}>{auth.user?.fullName[0].toUpperCase()}

                        </Avatar>:
                        <IconButton onClick={()=>{navigate('/account/login')}} >
                            <Person/>
                        </IconButton>}


                    </div>


                    <div className=''>

                        <IconButton onClick={()=>navigate("/cart")}>
                            <Badge color='primary' badgeContent={cart.cart?.cartItems.length}>
                                <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />

                            </Badge>
                        </IconButton>

                    </div>


                </div>
            </Box>


        </div>


    )
}
