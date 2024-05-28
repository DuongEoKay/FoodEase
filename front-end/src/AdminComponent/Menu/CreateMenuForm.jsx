import { AddPhotoAlternate, Face } from '@mui/icons-material'
import { Box, Button, Chip, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField, circularProgressClasses } from '@mui/material'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Address from '../../component/Profile/Address';
import { upload2Cloudinary } from '../Utils/Upload2Cloudinary';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsOfRestaurant } from '../../component/State/Ingredients/Action';
import { createMenuItem } from '../../component/State/Menu/Action';


const initialValues = {
    name: '',
    description: '',
    price: '',
    category: '',
    restaurantId: '',
    isVegan: true,
    isSeasonal: false,
    ingredients: [],
    imgs: []
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



export const CreateMenuForm = () => {

    const dispatch = useDispatch()
    const { menu, restaurant, ingredients } = useSelector(state => state)
    const jwt = localStorage.getItem('jwt')
    const handleRemoveImage = (index) => {
        const updatedImages = [...formik.values.imgs]
        updatedImages.splice(index, 1)
        formik.setFieldValue('imgs', updatedImages)
    }

    const [uploadImage, setUploadImage] = useState(null)

    const handleImageChange = async (e) => {
        const file = e.target.files[0]
        setUploadImage(true)
        const image = await upload2Cloudinary(file)


        formik.setFieldValue('imgs', [...formik.values.imgs, image])
        setUploadImage(false)

    }



    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            values.restaurantId = restaurant.usersRestaurant?.id

            dispatch(createMenuItem({ values, jwt }))
        }
    })

    useEffect(() => {
        dispatch(getIngredientsOfRestaurant({ id: restaurant.usersRestaurant?.id, jwt: jwt }))
    }, [])

    return (
        <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
            <div className='lg:max-w-4x1'>
                <h1 className='font-bold text-2xl text-center py-2'>
                    Add New Food
                </h1>
                <form onSubmit={formik.handleSubmit} className='space-y-4'>
                    <Grid container spacing={2}>
                        <Grid className='flex flex-wrap gap-5' item xs={12}>
                            <input
                                accept='image/*'
                                id='fileInput'
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                                type='file' />


                            <label className='relative' htmlFor="fileInput">
                                <span className='w-24 h-24 cursor-pointer flex items-center 
              justify-center p-3 border rounded-md border-gray-600'>
                                    <AddPhotoAlternate className='text-white' />
                                </span>
                                {
                                    uploadImage && <div className='absolute left-0 bottom-0 bg-gray-800 bg-opacity-50 text-white p-2 rounded-md'>
                                        <CircularProgress />
                                    </div>
                                }
                            </label>
                            <div className='flex flex-wrap gap-2'>
                                {formik.values.imgs.map((image, index) => <div className='relative'>
                                    <img className='w-24 h-24 object-cover'
                                        key={index}
                                        src={image}
                                        alt=''
                                    />
                                    <IconButton
                                        size='small'
                                        sx={{ position: 'absolute', top: 0, right: 0, outline: 'none' }}

                                        onClick={() => handleRemoveImage(index)}>
                                        <DeleteIcon sx={{ fontSize: "1rem" }} />
                                    </IconButton>
                                </div>)}

                            </div>

                        </Grid>

                        <Grid item xs={12} >
                            <TextField fullWidth
                                id='name'
                                name='name'
                                label='Food Name'
                                variant='outlined'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </Grid>

                        <Grid item xs={12} >
                            <TextField fullWidth
                                id='description'
                                name='description'
                                label='Description'
                                variant='outlined'
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                multiline
                                rows={4}
                            />
                        </Grid>


                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                                id='price'
                                name='price'
                                label='Price'
                                variant='outlined'
                                onChange={(event) => {
                                    formik.setFieldValue('price', Number(event.target.value));
                                }}
                                value={formik.values.price}
                            />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formik.values.category}
                                    label="Category"
                                    onChange={(event) => formik.setFieldValue('category', event.target.value)}
                                    name='category'
                                >
                                    {restaurant.categories.map((category) => (
                                        <MenuItem key={category.id} value={category}>
                                            {category.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-chip-label">Ingredients</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    name='ingredients'
                                    multiple
                                    value={formik.values.ingredients}
                                    onChange={(event) => formik.setFieldValue('ingredients', event.target.value)}
                                    input={<OutlinedInput id="select-multiple-chip" label="Ingredients" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value.id} label={value.name} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {ingredients.ingredients.map((item) => (
                                        <MenuItem
                                            key={item.id}
                                            value={item}
                                        >
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Is Seasonal?</InputLabel>
                                <Select
                                    labelId="isSeasonal"
                                    id="demo-simple-select"
                                    value={formik.values.isSeasonal}
                                    label="Is Seasonal?"
                                    onChange={formik.handleChange}
                                    name='isSeasonal'
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Is Vegetarian?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="isVegan"
                                    value={formik.values.isVegan}
                                    label="Is Vegetarian?"
                                    onChange={formik.handleChange}
                                    name='isVegan'
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>


                    <Button type='submit' variant='contained' color='primary' >
                        Add Food
                    </Button>
                </form>
            </div>

        </div>
    )
}
