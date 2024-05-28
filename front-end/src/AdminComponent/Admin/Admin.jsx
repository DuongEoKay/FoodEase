import React, { useEffect } from 'react'
import { AdminSideBar } from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../Dashboard/Dashboard'
import { Orders } from '../Orders/Orders'
import { Menu } from '../Menu/Menu'
import { FoodCategory } from '../FoodCategory/FoodCategory'
import { Ingredients } from '../Ingredients/Ingredients'
import {RestaurantDetails} from '../Admin/RestaurantDetails'
import { CreateMenuForm } from '../Menu/CreateMenuForm'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantById, getRestaurantsCategory } from '../../component/State/Restaurant/Action'
import { getMenuItemsByRestaurantId } from '../../component/State/Menu/Action'
import { fetchRestaurantsOrder } from '../../component/State/RestaurantOrder/Action'



export const Admin = () => {
    const dispatch = useDispatch()
    const handleClose = () => {
        console.log('close')
    }
    const jwt = localStorage.getItem('jwt')
    const {restaurant}=useSelector(state=>state)

    useEffect(() => {
        dispatch(getRestaurantById({jwt, restaurantId:restaurant.usersRestaurant?.id }))
        //dispatch(getRestaurantById())
        //dispatch(getMenuItemsByRestaurantId())
        dispatch(fetchRestaurantsOrder({jwt, restaurantId:restaurant.usersRestaurant?.id, orderStatus:'pending'}))
        dispatch(getRestaurantsCategory({jwt, restaurantId:restaurant.usersRestaurant?.id }))
    
    }, [])
  return (
    <div className='lg:flex justify-between'>
        <div>
            <AdminSideBar handleClose={handleClose}/>
        </div>
        <div className='lg:w-[80%]'>
            <Routes>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/category' element={<FoodCategory/>}/>
                <Route path='/ingredients' element={<Ingredients/>}/>
                <Route path='/details' element={<RestaurantDetails/>}/>
                <Route path='/add-menu' element={<CreateMenuForm/>}/>

            </Routes>
        </div>
        
    </div>
  )
}
