import { Avatar, Box, Card, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { Delete, OtherHouses } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { CreateMenuForm } from './CreateMenuForm';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFoodAction, getMenuItemsByRestaurantId } from '../../component/State/Menu/Action';
import { all } from 'axios';



export const MenuTable = () => {
    const dispatch = useDispatch()
    const {menu,restaurant} = useSelector(state => state)
    const navigate = useNavigate()
    const handleRemoveFood = (foodId) => {
        dispatch(deleteFoodAction({foodId, jwt: localStorage.getItem('jwt')}))
    }
    
    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId(
            {restaurantId: restaurant.usersRestaurant.id,
            jwt: localStorage.getItem('jwt'),
            vegetarian:true,
            seasonal:true,
            foodCategory:1,
            all:true},
        ))
    }, [])

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    action={<IconButton aria-label="settings" onClick={() => navigate("/admin/restaurant/add-menu")}>
                        <EditIcon />
                    </IconButton>}
                    title='Menu'
                    sx={{ pt: 2, alignItems: 'center' }}

                />
            </Card>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">IMG</TableCell>
                            <TableCell align="right">Tittle</TableCell>
                            <TableCell align="right">Ingredients</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Availability</TableCell>
                            <TableCell align="right">Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {menu.menuItem.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                {item.id}
                                </TableCell>
                                <TableCell align="right"><Avatar src={item.imgs[0]}/></TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                                <TableCell align="right">{item.ingredients.map((ingredient)=><Chip label={ingredient.name}/>)}</TableCell>
                                <TableCell align="right">{item.price}</TableCell>
                                <TableCell align="right">{item.available?'Yes':'No'}</TableCell>
                                <TableCell align="right"><IconButton ><Delete onClick={()=>handleRemoveFood(item.id)}/></IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    )
}
