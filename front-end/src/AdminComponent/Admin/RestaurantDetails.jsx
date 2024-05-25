import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useDispatch, useSelector } from 'react-redux';
import { updateRestaurantStatus } from '../../component/State/Restaurant/Action';

export const RestaurantDetails = () => {

  const dispatch = useDispatch()

  const { restaurant } = useSelector(state => state)

  const handleRestaurantStatus = () => {
    dispatch(updateRestaurantStatus(
      {
        restaurantId: restaurant.usersRestaurant.id,
        jwt: localStorage.getItem('jwt')
      }
    ))
  }
  return (
    <div className='lg:px-20 px-5'>
      <div className='py-5 flex justify-center items-center gap-5'>


        <h1 className='text-2x1 lg:text-7x1 text-center font-bold p-5'>{restaurant.usersRestaurant.name}</h1>
        <div>
          <Button color={!restaurant.usersRestaurant?.open ? 'primary' : 'error'} className='py-[1rem] px-[2rem]' variant='contained' onClick={handleRestaurantStatus} size='large'>
            {restaurant.usersRestaurant?.open ? 'close' : 'open'}
          </Button>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Restaurant</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Owner</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.usersRestaurant.owner.fullName}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Restaurant Name</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.usersRestaurant.name}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Cuisine Type</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.usersRestaurant.cuisineType}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Opening Hour</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.usersRestaurant.openingHours}
                  </p>
                </div>


                <div className='flex'>
                  <p className='w-48'>Status</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant.usersRestaurant?.open ? <span className='px-5 py-2 rounded-full bg-green-400 text-gray-50'>Open</span> : <span className='px-5 py-2 rounded-full bg-red-400 text-gray-50'>Close</span>}
                  </p>
                </div>

              </div>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Address</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>

                <div className='flex'>
                  <p className='w-48'>Street Address</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.usersRestaurant.address.street}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>City</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.usersRestaurant.address.city}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Postal Code</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.usersRestaurant.address.postalCode}
                  </p>
                </div>





              </div>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Contact</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Mobile</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.usersRestaurant.contact.phone}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Email</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>{restaurant.usersRestaurant.contact.email}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Social</p>

                  <div className='flex text-gray-400 items-center pb-3 gap-5'>
                    <span className='pr-5'>-</span>
                    <a href={`https://www.instagram.com/${restaurant.usersRestaurant.contact.instagram}`}>
                      <InstagramIcon sx={{ fontSize: '3rems' }} />
                    </a>
                    <a href={`https://www.facebook.com/${restaurant.usersRestaurant.contact.instagram}`}>
                      <FacebookIcon sx={{ fontSize: '3rems' }} />
                    </a>
                  </div>



                </div>



              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>


    </div>
  )
}
