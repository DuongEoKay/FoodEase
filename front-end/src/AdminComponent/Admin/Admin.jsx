import React from 'react'
import { AdminSideBar } from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../Dashboard/Dashboard'
import { Orders } from '../Orders/Orders'
import { Menu } from '../Menu/Menu'
import { FoodCategory } from '../FoodCategory/FoodCategory'
import { Ingredients } from '../Ingredients/Ingredients'
import { Events } from '../Events/Events'
import {RestaurantDetails} from '../Admin/RestaurantDetails'



export const Admin = () => {

    const handleClose = () => {
        console.log('close')
    }
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
                <Route path='/foodcategory' element={<FoodCategory/>}/>
                <Route path='/ingredients' element={<Ingredients/>}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='/details' element={<RestaurantDetails/>}/>

            </Routes>
        </div>
        
    </div>
  )
}
