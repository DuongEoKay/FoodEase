import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useSelector } from 'react-redux'
import { AddressCard } from '../Cart/AddressCard'

const Address = () => {
  const auth = useSelector(state => state)
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>My Address</h1>

      <div className='flex flex-wrap gap-5 justify-center'>
        {auth?.auth?.user?.addresses.map((item) => <AddressCard  item={item} showButton={false} />)}
        
      </div>
    </div>
  )
}

export default Address