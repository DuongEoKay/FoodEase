import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';




const categories = ["Pho", "Bun", "Com", "Mi"];


const foodType = [{ label: "All", value: "all" },
{ label: "Vegetarian", value: "vegetarian" },
{ label: "Non-vegetarian", value: "non-vegetarian" },
{ label: "Seasonal", value: "seasonal" },];


const Menu = [1,1,1,1,,1,1,]

export const RestaurantDetails = () => {

    const [selectedFoodType, setSelectedFoodType] = useState('all')
    const [selectedCategory, setSelectedCategory] = useState('all')

    const handleFilterFoodType = (e) => {
        setSelectedFoodType(e.target.value, e.target.label);

    }

    const handleFilterCategory = (e) => {

        setSelectedCategory(e.target.value);
    }




    return (
        <div className='px-5 lg:px-20 '>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>
                    Home/vietnam/vanduong/3
                </h3>
                <div>
                    <Grid container spacing={12}>
                        <Grid item xs={12} lg={4}>
                            <img className='w-full h-[40vh] object-cover' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/74/1a/08/restaurant-ambiance.jpg?w=1000&h=-1&s=1" alt="" />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <img className='w-full h-[40vh] object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/640px-Restaurant_N%C3%A4sinneula.jpg" alt="" />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <img className='w-full h-[40vh] object-cover' src="https://windypoint.com.au/wp-content/uploads/2020/01/DSC00593.jpg" alt="" />
                        </Grid>

                    </Grid>
                </div>

                <div className='pt-3 pb-5'>
                    <h1 className='text-4x1 font-semibold' >Vietnammese Food</h1>
                    <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
                        officia quaerat sed excepturi, animi vel quasi nisi inventor
                        e commodi sequi quod aspernatur tempora eaque quo quis id dolo
                        rum unde doloribus.</p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <LocationOnIcon />
                        <span>Saigon</span>
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
                                <RadioGroup onChange={handleFilterCategory} name="food_type" value={selectedCategory}>
                                    {categories.map((item) =>
                                        <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                                    )}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {Menu.map((item) => <MenuCard />)}

                </div>

            </section>


        </div>
    )
}
