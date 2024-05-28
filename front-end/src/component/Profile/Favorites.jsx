import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'
import {useSelector} from 'react-redux'

const Favorites = () => {
  const auth=useSelector(state=>state)
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favourite</h1>

      <div className='flex flex-wrap gap-5 justify-center'>
          {auth?.auth?.user?.favourites.map((item)=><RestaurantCard item={item}/>)}
      </div>
    </div>
  )
}

export default Favorites