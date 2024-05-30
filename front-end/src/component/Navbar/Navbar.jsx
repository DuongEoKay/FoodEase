import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import './Navbar.css'
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { searchRestaurants } from '../State/Search/Action';
import { findCart } from '../State/Cart/Action';


export const Navbar = () => {
    const { auth, cart } = useSelector(state => state)
    const token = localStorage.getItem('jwt')

    const navigate = useNavigate()
    const handleAvatarClick = () => {
        if (auth.user.role === 'ROLE_CUSTOMER') {
            navigate('/profile')
        }
        if (auth.user.role === 'ROLE_RESTAURANT_OWNER') {
            navigate('/admin/restaurant/dashboard')
        }
    }
    const handleLogoClick = () => {
        navigate('/')
    }

    let numItems = 0;
    for (let i = 0; i < cart.cart?.cartItems.length; i++) {
        numItems += cart.cart?.cartItems[i].quantity;
    }




    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    const handleSearch = (event) => {
        event.preventDefault();
        navigate('/search');
        dispatch(searchRestaurants({ searchTerm }))
    };
    useEffect(() => {
        dispatch(findCart(token))
    }, [JSON.stringify(cart?.cartItems)])
    return (




        <div>
            <Box className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#000000] lg:px-20 flex justify-between backdrop-blur-md'>



                <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                    <li onClick={handleLogoClick} className='logo font-semibold text-gray-300 text-2xl'>
                        FoodEase
                    </li>
                </div>
                <div className='flex items-center space-x-2 lg:space-x-10'>


                    <div className="xl:w-96">
                        <form onSubmit={handleSearch}>
                            <div className="relative flex w-full flex-wrap items-stretch">
                                <input
                                    type="search"
                                    className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary"
                                    placeholder="Search for Restaurants ..."
                                    aria-label="Search"
                                    aria-describedby="button-addon2"
                                    value={searchTerm}
                                    onChange={event => setSearchTerm(event.target.value)}
                                />

                                {/* <!--Search icon--> */}
                                <span
                                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-white-700 dark:text-neutral-200"
                                    id="basic-addon2">
                                    <div className=''>
                                        <IconButton type="submit">
                                            <SearchIcon sx={{ fontSize: "1.5rem" }} />
                                        </IconButton>
                                    </div>
                                </span>
                            </div>
                        </form>
                    </div>



                    <div className=''>
                        {auth.user ? <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: 'black' }}>{auth.user?.fullName[0]?.toUpperCase()}

                        </Avatar> :
                            <IconButton onClick={() => { navigate('/account/login') }} >
                                <Person />
                            </IconButton>}


                    </div>


                    <div className=''>

                        <IconButton onClick={() => navigate("/cart")}>
                            <Badge color='primary' badgeContent={numItems}>
                                <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />

                            </Badge>
                        </IconButton>

                    </div>


                </div>
            </Box>


        </div>


    )
}
