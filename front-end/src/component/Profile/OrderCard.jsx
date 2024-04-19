import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvf5_G0IXwry9xQczu5BaQb7aQvrVkyIwPyOGKPxRJA&s" alt="" />
        
            <div>
            <p>Pho</p>
            <p>40.000 VND</p>
        </div>
        
        </div>
        <div>
            <Button  className='cursor-not-allowed'>
                Completed
            </Button>
        </div>
        

    </Card>
  )
}
