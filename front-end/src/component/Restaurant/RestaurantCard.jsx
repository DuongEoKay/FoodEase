import React from 'react';
import { Card, Chip, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  const isOpen = true; 
  const isFavorite = true; 

  return (
    <Card className='w-[18rem]'>
      <div className={`${isOpen ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
        <img className='w-full h-[10rem] rounded-t-md object-cover' src="https://vcdn1-english.vnecdn.net/2023/10/19/anansaigon33jpg1686303587-1697-1391-3214-1697679526.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=zIRTgcbuVgHPHnEA6I6nQA" alt="" />
        <Chip className='absolute top-2 right-2' label={isOpen ? "Open" : "Closed"} color={isOpen ? "success" : "error"} />
      </div>
      <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>Vietnamese Food</p>
          <p className='text-gray-500 text-sm'>Craving it all? Dive into our global flat...</p>
        </div>
        <div>
          <IconButton>
            {isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

export default RestaurantCard;
