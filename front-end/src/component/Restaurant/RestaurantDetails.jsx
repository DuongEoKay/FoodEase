import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography, getMenuItemUtilityClass } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantsCategory } from '../State/Restaurant/Action';
import { getMenuItemsByRestaurantId } from '../State/Menu/Action';
import { FastField } from 'formik';






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
        dispatch(getRestaurantsCategory({ jwt, restaurantId: id }))
    }, [])


    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId({
            jwt,
            restaurantId: id,
            seasonal: selectedFoodType === 'seasonal' || selectedFoodType === 'all',
            vegetarian: selectedFoodType === 'vegetarian' || selectedFoodType === 'all',
            foodCategory: selectedCategory
        }))

    }, [selectedCategory, selectedFoodType])







    return (
        <div className='px-5 lg:px-20 '>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>
                    Home/vietnam/vanduong/3
                </h3>
                <div>
                    <Grid container spacing={12}>
                        <Grid item xs={12} lg={4}>
                            <img className='w-full h-[40vh] object-cover' src={restaurant.restaurants?.imgs?.[1]} alt="" />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <img className='w-full h-[40vh] object-cover' src={restaurant.restaurants?.imgs?.[2]} alt="" />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <img className='w-full h-[40vh] object-cover' src="https://windypoint.com.au/wp-content/uploads/2020/01/DSC00593.jpg" alt="" />
                        </Grid>

                    </Grid>
                </div>

                <div className='pt-3 pb-5'>
                    <h1 className='text-4x1 font-semibold' >{restaurant.restaurants?.name}</h1>
                    <p className='text-gray-500 mt-1'>{restaurant.restaurants?.description}</p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <LocationOnIcon />
                        <span>{restaurant.restaurants?.address?.street}, {restaurant.restaurants?.address?.city}</span>
                    </p>

                    <p className='text-gray-500 flex items-center gap-3'>
                        <CalendarMonthIcon />
                        <span>6AM - 9PM, Mon - Sun</span>
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
