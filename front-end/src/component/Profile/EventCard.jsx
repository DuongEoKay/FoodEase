import { Card, CardActions, CardContent, CardMedia, Icon, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia sx={{height:345}} image='https://www.eventbrite.co.uk/blog/wp-content/uploads/2022/06/reduce-no-shows-1.jpg' />
            <CardContent >
                <Typography variant='h5' >
                    VDG restaurant
                </Typography>
                <Typography variant='body2' >
                    50% off on your first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"saigon"}</p>
                    <p className='text-sm text-blue-500'>00:00 14th Feb, 2024</p>
                    <p className='text-sm text-red-500'>00:00 14th Feb, 2024</p>
                </div>
            </CardContent>

            {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}
