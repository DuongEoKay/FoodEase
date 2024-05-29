import React from 'react';
import { Card, Chip, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isPresentInFavourite } from '../config/logic';
import { addToFavorite } from '../State/Authentication/Action';
import { useState } from 'react';
import { useEffect } from 'react';

const RestaurantCard = ({item}) => {

  const navigate=useNavigate();
  const dispatch = useDispatch();
  const auth=useSelector(state=>state)
  const jwt=localStorage.getItem('jwt')
  auth.favorites = auth?.auth?.user?.favourites || [];

  const [isFavorited, setIsFavorited] = useState(false);

  // Use useEffect to set the initial state
  useEffect(() => {
    setIsFavorited(isPresentInFavourite(auth.favorites, item));
  }, [auth.favorites, item]);
  
  const handleAddToFavorite = () => {
    if (isFavorited) {
      // If the item is already favorited, dispatch an action to remove it from favorites
      dispatch(addToFavorite({jwt,restaurantId: item.id}));
    } else {
      // If the item is not favorited, dispatch an action to add it to favorites
      dispatch(addToFavorite({jwt,restaurantId: item.id}));
    }
    // Toggle the favorited state
    setIsFavorited(!isFavorited);
  }
  
  const handleNavigateToRestaurant = () => {

        navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`)

  }
  
  return (
    <Card className='w-[18rem]'>
      <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
        <img className='w-full h-[10rem] rounded-t-md object-cover' src={item.imgs[1]} alt="" />
        <Chip className='absolute top-2 right-2' label={item.open ? "Open" : "Closed"} color={item.open ? "success" : "error"} />
      </div>
      <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p  onClick={handleNavigateToRestaurant} className='font-semibold text-lg cursor-pointer'>{item.name}</p>
          <p className='text-gray-500 text-sm'>{item.description}</p>
        </div>
        <div>
          <IconButton onClick={handleAddToFavorite}>
          {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
