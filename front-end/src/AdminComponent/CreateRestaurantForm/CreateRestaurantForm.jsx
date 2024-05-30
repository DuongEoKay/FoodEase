import { AddPhotoAlternate, Face } from '@mui/icons-material'
import { Button, CircularProgress, Grid, IconButton, TextField, circularProgressClasses } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Address from '../../component/Profile/Address';
import { upload2Cloudinary } from '../Utils/Upload2Cloudinary';
import { useDispatch } from 'react-redux';
import { createRestaurant } from '../../component/State/Restaurant/Action';
import { useNavigate } from 'react-router-dom';


const initialValues = {
  name: '',
  description: '',
  cuisineType: '',
  streetAddress: '',
  city: '',
  postalCode: '',
  country: '',
  email: '',
  mobile: '',
  instagram: '',
  facebook: '',
  openingHour: 'Mon - Sun 9:00 AM - 9:00 PM',
  images: []
}

export const CreateRestaurantForm = () => {

  const navigate = useNavigate()
  const dispath = useDispatch()
  const handleRemoveImage = (index) => {
    const updatedImages=[...formik.values.images]
    updatedImages.splice(index,1)
    formik.setFieldValue('images',updatedImages)
  }

  const [uploadImage, setUploadImage] = useState(null)

  const handleImageChange = async (e) => {
    const file=e.target.files[0]
    setUploadImage(true)
    const image=await upload2Cloudinary(file)
    formik.setFieldValue('images',[...formik.values.images,image])
    setUploadImage(false)

  }



  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      const data={
        imgs:values.images,
        name:values.name,
        description:values.description,
        cuisineStyle:values.cuisineType,
        openingHours:values.openingHour,
        address:{
          street:values.streetAddress,
          city:values.city,
          postalCode:values.postalCode,
        },
        contact:{
          email:values.email,
          phone:values.mobile,
          instagram:values.instagram,
          facebook:values.facebook
        }
        
      }
      dispath(createRestaurant({data, jwt:localStorage.getItem('jwt')}))
      .then(() => {
        window.location.href = 'http://localhost:3000/admin/restaurant';
      });
    }
  })

  return (
    <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
      <div className='lg:max-w-4x1'>
        <h1 className='font-bold text-2xl text-center py-2'>
          Add New Restaurant
        </h1>
        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          <Grid container spacing={2}>
            <Grid className='flex flex-wrap gap-5' item xs={12}>
              <input
                accept='image/*'
                id='fileInput'
                style={{ display: 'none' }}
                multiple
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
                {formik.values.images.map((image, index) => <div className='relative'>
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

            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='name'
                name='name'
                label='Restaurant Name'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='cuisineType'
                name='cuisineType'
                label='Cuisine Type'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.cuisineType}
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
                id='openingHour'
                name='openingHour'
                label='Opening Hour'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.openingHour}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth
                id='streetAddress'
                name='streetAddress'
                label='Street Address'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.streetAddress}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth
                id='city'
                name='city'
                label='City'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.city}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth
                id='postalCode'
                name='postalCode'
                label='Postal Code'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.postalCode}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='email'
                name='email'
                label='Email'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Grid>


            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='mobile'
                name='mobile'
                label='Mobile'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.mobile}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='instagram'
                name='instagram'
                label='Instagram'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.instagram}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='facebook'
                name='facebook'
                label='Facebook'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.facebook}
              />
            </Grid>
          </Grid>
          <Button  type='submit' variant='contained' color='primary' >
            Add Restaurant
          </Button>
        </form>
      </div>

    </div>
  )
}
