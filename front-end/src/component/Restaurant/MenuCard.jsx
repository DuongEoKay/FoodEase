import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Category } from '@mui/icons-material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { categorizeIngredient } from '../utils/categorizeIngredient'
import { CartItem } from '../Cart/CartItem';
import { useDispatch } from 'react-redux';
import { addItemtoCart } from '../State/Cart/Action';





const MenuCard = ({ item }) => {
    const dispatch = useDispatch()
    const handleCheckBoxChange = (value) => {
        if (selectedIngredients.includes(value)) {
            setSelectedIngredients(selectedIngredients.filter(item => item !== value));
        } else {
            setSelectedIngredients([...selectedIngredients, value]);
        }
    }

    const [selectedIngredients, setSelectedIngredients] = useState([])
    
    const handleAddItemToCart = () => {
        const reqData={
            token: localStorage.getItem('jwt'),
            cartItem:{
                foodId:item.id,
                quantity:1,
                ingredients:selectedIngredients,
            }
        
        }
        console.log(reqData)
        dispatch(addItemtoCart(reqData))
    }



    return (
        <div><Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img className='w-[7rem] h-[7rem] object-cover' src={item.imgs[0]} alt="" />
                        <div className='space-y-1 lg:space-y-5 lg:max-w-2x1'>
                            <p className='font-semibold text-x1'>{item.name}</p>
                            <p>{item.price} VND</p>
                            <p className='text-gray-400'>{item.description}</p>
                        </div>
                    </div>

                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form >
                    <div className='flex gap-5 flex-wrap'>
                        {Object.keys(categorizeIngredient(item.ingredients)).map((category) =>
                            <div>
                                <p>{category}</p>
                                <FormGroup>
                                    {categorizeIngredient(item.ingredients)[category].map((item) =>
                                        <FormControlLabel key={item.name} control={<Checkbox onChange={() => handleCheckBoxChange(item.name)} />} label={item.name} />
                                    )}
                                </FormGroup>
                            </div>)
                        }

                    </div>
                    <div className='pt-5'>
                        <Button onClick={handleAddItemToCart} variant='contained' disable={false} >
                            {true ? "Add to Cart" : "Out of Stock"}
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion></div>
    )
}

export default MenuCard