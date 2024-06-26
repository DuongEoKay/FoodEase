import React, { useEffect } from 'react'
import './Home.css'
import { MultiItemCarousel } from './MultiItemCarousel'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { Auth } from '../Auth/Auth'
import { getAllRestaurantsAction } from '../State/Restaurant/Action'
import { useDispatch, useSelector } from 'react-redux'
import { findCart } from '../State/Cart/Action'



export const Home = () => {

  const dispatch = useDispatch()
  const jwt= localStorage.getItem('jwt')
  useEffect(() => {
      dispatch(getAllRestaurantsAction(jwt))
  }, [])

  const {restaurant}=useSelector(state=>state)


    
  return (
    <div className='pb-10'>
        <section className='banner -z-50 relative flex flex-col justify-center'>

            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2x1 lg:text-6x1 font-bold z-10 py-5'> Online Food Ordering Application</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4x1'>personal project by Van Duong</p>


            </div>
            <div className='cover absolute top-0 left-0 right-0'>


            </div>

            <div className='fadout'>


            </div>
    

        </section>

        <section className='p-10 lg:py-10 lg:px-20'>
          <p className='text-2x1 font-semibold text-gray-400 py-3 pb-10'>Top Meals</p>
            <MultiItemCarousel/>
        </section>



        <section className='px-5 lg:px-20'>
          <h1 className='text-2x1 font-semibold text-gray-400 py-3'>Top Restaurant</h1>
          <div className='flex flex-wrap items-center justify-around gap-5'>
            
          {restaurant?.restaurants?.map ? restaurant.restaurants.map((item)=><RestaurantCard item={item}/>) : null}            
          </div>
        </section>

    </div>
  )
}
