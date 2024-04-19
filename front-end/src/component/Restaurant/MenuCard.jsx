import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Category } from '@mui/icons-material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const demo = [{
    category: 'Nut & Seed',
    ingredients: ['Almond', 'Cashew', 'Peanut', 'Pistachio', 'Walnut']
},
{
    category: 'Protein',
    ingredients: ['Beef', 'Chicken', 'Pork', 'Fish', 'Shrimp']
}

]


const MenuCard = () => {

    const handleCheckBoxChange=(value)=>{
        console.log(value)
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
                        <img className='w-[7rem] h-[7rem] object-cover' src="https://newsinhealth.nih.gov/sites/nihNIH/files/styles/featured_media_breakpoint-large/public/2023/August/aug-2023-cover-illustration-different-types-foods-five-food-groups-vegetables-fruits-dairy-products-oils-proteins.jpg?itok=1I_7PRfJ" alt="" />
                        <div className='space-y-1 lg:space-y-5 lg:max-w-2x1'>
                            <p className='font-semibold text-x1'>Pho</p>
                            <p>40.000 VND</p>
                            <p className='text-gray-400'>descriptiondescriptiondescriptiondescriptiondescription</p>
                        </div>
                    </div>

                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form >
                    <div className='flex gap-5 flex-wrap'>
                        {demo.map((item) =>
                        <div>
                            <p>{item.category}</p>
                             <FormGroup>
                                {item.ingredients.map((item)=>
                                <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)} />} label={item} />
                                )}
                            </FormGroup>
                        </div>)
}
                           
                    </div>
                    <div className='pt-5'>
                        <Button variant='contained' disable={false} type="submit">
                            {true?"Add to Cart":"Out of Stock"}
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion></div>
    )
}

export default MenuCard