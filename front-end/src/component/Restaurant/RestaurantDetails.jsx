import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography, getMenuItemUtilityClass } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantsCategory } from '../State/Restaurant/Action';
import { getMenuItemsByRestaurantId } from '../State/Menu/Action';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CheckIcon from '@mui/icons-material/Check';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Mail } from '@mui/icons-material';




const foodType = [{ label: "All", value: "all" },
{ label: "Vegetarian", value: "vegetarian" },
{ label: "Non-vegetarian", value: "non-vegetarian" },
{ label: "Seasonal", value: "seasonal" },];




export const RestaurantDetails = () => {





    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state)
    const { restaurant } = useSelector(state => state)
    const { menu } = useSelector(state => state)
    const jwt = localStorage.getItem('jwt')
    auth.favorites = auth?.auth?.user?.favourites || [];
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedFoodType, setSelectedFoodType] = useState('all')
    const handleFilterFoodType = (e, value) => {
        setSelectedFoodType(value);
    }

    const handleFilterCategory = (e, value) => {

        for (let i = 0; i < restaurant.categories.length; i++) {
            if (restaurant.categories[i].name === value) {
                setSelectedCategory(restaurant.categories[i].id)
            }
        }
    }

    const { id, city } = useParams();

    useEffect(() => {
        dispatch(getRestaurantById({ jwt, restaurantId: id }))
        dispatch(getRestaurantsCategory({ jwt, restaurantId: restaurant.restaurants?.owner?.id }))
    }, [restaurant.usersRestaurant?.id])


    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId({
            jwt,
            restaurantId: id,
            seasonal: selectedFoodType === 'seasonal' || selectedFoodType === 'all',
            vegetarian: selectedFoodType === 'vegetarian' || selectedFoodType === 'all',
            foodCategory: selectedCategory,
            all: false
        }))

    }, [selectedCategory, selectedFoodType])







    return (
        <div className='px-5 lg:px-20 '>
            <section>
                <h3 className='text-gray-500 py- mt-10'>
                    Home/vietnam/vanduong/3
                </h3>
                <div>
                    <Grid container spacing={12}>
                        {restaurant.restaurants?.imgs?.map((image, index) => (
                            <Grid item xs={12} lg={4} key={index}>
                                <img className='w-full h-[40vh] object-cover' src={image} alt="" />
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <div className='pt-3 pb-5' >
                    <h1 className='text-4x1 font-semibold' >{restaurant.restaurants?.name}</h1>
                    <p className='text-gray-500 mt-1 mb-3'>{restaurant.restaurants?.description}</p>
                    <p className='text-gray-500 flex items-center gap-3 mb-3'>
                        <p className='text-gray-500 flex items-center gap-3 mr-4'>
                            <CheckIcon />
                            <span>{restaurant.restaurants?.open ? <span className='px-5 py-2 rounded-full bg-green-400 text-gray-50'>Open</span> : <span className='px-5 py-2 rounded-full bg-red-400 text-gray-50'>Close</span>}</span>
                        </p>
                        <FastfoodIcon />
                        <span>{restaurant.restaurants?.cuisineType}</span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3 mb-3'>
                        <LocationOnIcon />
                        <span>{restaurant.restaurants?.address?.street}, {restaurant.restaurants?.address?.city}</span>
                    </p>

                    <p className='text-gray-500 flex items-center gap-3'>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <LocalPhoneIcon />
                            <span>{restaurant.restaurants?.contact?.phone}</span>
                        </p>
                        <Mail />
                        <span>{restaurant.restaurants?.contact?.email}</span>
                    <div className='flex text-gray-400 items-center pb-3 gap-5'>
                        <a href={`https://www.instagram.com/${restaurant.restaurants?.contact?.instagram}`}>
                            <InstagramIcon sx={{ fontSize: '3rems' }} />
                        </a>
                        <a href={`https://www.facebook.com/${restaurant.restaurants?.contact?.facebook}`}>
                            <FacebookIcon sx={{ fontSize: '3rems' }} />
                        </a>
                    </div>
                    </p>

                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter '>
                    <div className='box space-y-5 lg:sticky top-28 d'>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilterFoodType} name="food_type" value={selectedFoodType}>
                                    {foodType.map((item) =>
                                        <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
                                    )}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />

                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilterCategory} name="food_category" value={restaurant.categories.find(cat => cat.id === selectedCategory)?.name || ''}>
                                    {restaurant.categories.map((item) =>
                                        <FormControlLabel key={item.id} value={item.name} control={<Radio />} label={item.name} />
                                    )}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.menuItem.map((item, index) => <MenuCard key={item.id} item={item} />)}
                </div>

            </section>


        </div>
    )
}
