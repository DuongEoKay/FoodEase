import { Chip, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



export const CartItem = () => {
    return (
        <div className='px-5'>
            <div className='lg:flex items-center lg:space-x-5'>
                <div>
                    <img className='w-[5rem] h-[5rem] object-cover' src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8=" alt="" />
                </div>

                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p>Pho</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                                <IconButton>
                                    <RemoveIcon />
                                </IconButton>

                                <div className='w-5 h-5 text-xs flex items-center justify-center '>
                                    {5}
                                </div>
                                <IconButton>
                                    <AddIcon />
                                </IconButton>
                            </div>
                        </div>

                    </div>
                    <p>40.000 VND</p>
                </div>
            </div>
            <div className='pt-3 space-x-2'>
                {[1,1,1].map((item)=><Chip label={"Pho"}/>)}

            </div>

        </div>
    )
}
