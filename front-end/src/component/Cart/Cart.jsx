import { Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { CartItem } from './CartItem'
import { AddressCard } from './AddressCard'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../State/Order/Action';
import HomeIcon from '@mui/icons-material/Home';
import { findCart } from '../State/Cart/Action';



const items = [1, 1]
export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: "none",
    boxShadow: 24,
    p: 4,
};


const initialValues = {
    street: '',
    postalCode: '',
    city: ''
}




// const validationSchema=Yup.object.shape({
//     streetAddress:Yup.string().required('Street Address is required'),
//     state:Yup.string().required('State is required'),
//     pincode:Yup.string().required('Pincode is required'),
//     city:Yup.string().required('City is required')


// })

const Cart = () => {
    const token = localStorage.getItem('jwt')
    const dispatch = useDispatch()

    const createOrderUsingSelectedAddress = () => { }

    const handleOpenAddressModal = () => setOpen(true);
    const [open, setOpen] = React.useState(false);

    const { cart, auth } = useSelector(state => state)



    const handleClose = () => {
        setOpen(false);
    }


    const handleSubmit = (values) => {

        const data = {
            jwt: localStorage.getItem('jwt'),
            order: {
                restaurantId: cart.cart.cartItems[0].food?.restaurant.id,
                deliveryAddress: {
                    street: values.street,
                    city: values.city,
                    postalCode: values.postalCode
                }

            }
        }
        dispatch(createOrder(data))
    }

    return (

        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {cart.cart?.cartItems.map((item) => (<CartItem item={item} />))}
                    <Divider />

                    <div className='billlDetails px-5 text-sm'>
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className='flex justify-between text-gray-400'>
                            <p>Item Total</p>
                            <p>{cart.cart?.total} VND</p>

                        </div>

                        <div className='flex justify-between text-gray-400 py-5'>
                            <p>Deliver Fee</p>
                            <p>0 VND</p>

                        </div>

                        <div className='flex justify-between text-gray-400'>
                            <p>GST and Restaurant Charges</p>
                            <p>0 VND</p>

                        </div>
                        <Divider className='py-5' />
                        <div className='flex justify-between py-5 text-gray-400'>
                            <p>Total Pay</p>
                            <p>{cart.cart?.total} VND</p>
                        </div>
                    </div>


                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2x1 py-10'>
                            Choose Delivery Address
                        </h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {auth.user?.addresses.map((item) => <Card className='flex gap-5 w-64 p-5'>
                                <HomeIcon />
                                <div className='space-y-3 text-gray-500'>
                                    <h1 className='font-semibold text-lg text-white'>{item.city}</h1>
                                    <p>
                                        Street: {item.street}
                                    </p>
                                    <p>
                                        Postal Code: {item.postalCode}
                                    </p>
                                    {(<Button variant="outlined" fullWidth onClick={() => handleSubmit(item)}>
                                        Select
                                    </Button>)}
                                </div>
                            </Card>)}
                            <Card className='flex gap-5 w-64 p-5'>
                                <LocationOnIcon />
                                <div className='space-y-3 text-gray-500'>
                                    <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                                    <Button variant="outlined" fullWidth onClick={handleOpenAddressModal}>
                                        Add
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik initialValues={initialValues}
                        //validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        <Form>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name='street'
                                        label='Street Address'
                                        variant='outlined'
                                        fullWidth
                                    // error={!ErrorMessage("streetAddress")}
                                    // hyperText={<ErrorMessage>
                                    //     {(msg)=><span className='text-red-600'>{msg}</span>}
                                    // </ErrorMessage>}
                                    />
                                </Grid>


                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name='city'
                                        label='City'
                                        variant='outlined'
                                        fullWidth
                                    // error={!ErrorMessage("streetAddress")}
                                    // hyperText={<ErrorMessage>
                                    //     {(msg)=><span className='text-red-600'>{msg}</span>}
                                    // </ErrorMessage>}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name='postalCode'
                                        label='Postal Code'
                                        variant='outlined'
                                        fullWidth
                                    // error={!ErrorMessage("streetAddress")}
                                    // hyperText={<ErrorMessage>
                                    //     {(msg)=><span className='text-red-600'>{msg}</span>}
                                    // </ErrorMessage>}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button fullWidth variant='contained' type="submit" color="primary" >
                                        Deliver Here
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>

                    </Formik>
                </Box>
            </Modal>
        </>
    )
}

export default Cart