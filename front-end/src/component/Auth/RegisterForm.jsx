import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { registerUser } from '../State/Authentication/Action';
import { useDispatch } from 'react-redux';



const initialValues = {
  fullName: '',
  email: '',
  password: '',
  role: 'ROLE_CUSTOMER',

}
export const RegisterForm = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    console.log("form value", values)
    dispatch(registerUser({userData:values, navigate}))
  }
  return (
    <div>
      <Typography variant='h5' className='text-center'  >
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form >
          <Field
            as={TextField}
            name='fullName'
            label='Fullname'
            variant='outlined'
            fullWidth
            margin='normal'
          />

          <Field
            as={TextField}
            name='email'
            label='Email'
            variant='outlined'
            fullWidth
            margin='normal'
          />

          <Field
            as={TextField}
            name='password'
            label='Pasword'
            variant='outlined'
            fullWidth
            margin='normal'
            type='password'
          />

          <FormControl fullWidth margin='normal'>
            <InputLabel id="role-simple-select-label">Role</InputLabel>
            <Field
            as={Select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={age}
              label="Role"
              name='role'
              //onChange={handleChange}
            >
              <MenuItem value={'ROLE_CUSTOMER'}>Customer</MenuItem>
              <MenuItem value={'ROLE_RESTAURANT_OWNER'}>Restaurant Owner</MenuItem>
            </Field>
          </FormControl>

          <Button sx={{ mt: 2, padding: "1rem" }} fullWidth variant='contained' type='submit' color='primary'>
            Register
          </Button>


        </Form>
      </Formik>
      <Typography variant='body2' allign='center' sx={{ mt: 3 }}>
        If you have an account already?
        <Button size='small' onClick={() => navigate('/account/login')} color='primary'>Register</Button>
      </Typography>
    </div>
  )
}
