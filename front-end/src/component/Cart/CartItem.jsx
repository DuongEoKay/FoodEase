import { Chip, IconButton } from '@mui/material'
import React, { useContext } from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {removeCartItem, updateCartItem} from '../State/Cart/Action'



export const CartItem = ({item}) => {
    const {auth,cart}=useSelector(state=>state)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const jwt=localStorage.getItem('jwt')


    const handleUpdateCartItem=(value)=>{
        if(value===-1 && item.quantity===1){
        dispatch(removeCartItem(item.id,jwt))
        }
        const data={cartItemId:item.id,quantity:item.quantity+value}
        dispatch(updateCartItem(data,jwt))

    }

    
    return (
        <div className='px-5'>
            <div className='lg:flex items-center lg:space-x-5'>
                <div>
                    <img className='w-[5rem] h-[5rem] object-cover' src={item.food.imgs[0]} alt="" />
                </div>

                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p>{item.food.name}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                                <IconButton onClick={()=>{handleUpdateCartItem(-1)}}>
                                    <RemoveIcon />
                                </IconButton>

                                <div className='w-5 h-5 text-xs flex items-center justify-center '>
                                    {item.quantity}
                                </div>
                                <IconButton onClick={()=>{handleUpdateCartItem(+1)}}>
                                    <AddIcon />
                                </IconButton>
                            </div>
                        </div>

                    </div>
                    <p>{item.totalPrice} VND</p>
                </div>
            </div>
            <div className='pt-3 space-x-2'>
                {item.ingredients.map((item)=><Chip label={item}/>)}

            </div>

        </div>
    )
}
