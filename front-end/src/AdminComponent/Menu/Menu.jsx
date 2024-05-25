import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import { MenuTable } from './MenuTable';


export const Menu = () => {
  const [filterValue, setFilterValue] = React.useState('all')

  const handleFilter=(e)=>{
    setFilterValue(e.target.value)
  }
  return (
    <div className='px-2'>
      <MenuTable/>
    </div>
  )
}
