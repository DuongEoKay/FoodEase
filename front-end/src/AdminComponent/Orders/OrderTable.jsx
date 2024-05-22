import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
const orders = [1, 1, 1, 1, 1, 1, 1]
export const OrderTable = () => {
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    title='All Orders'
                    sx={{ pt: 2, alignItems: 'center' }}

                />
            </Card>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">IMG</TableCell>
                            <TableCell align="right">Customer</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Ingredients</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    1
                                </TableCell>
                                <TableCell align="right">img1.jpg</TableCell>
                                <TableCell align="right">vanduong</TableCell>
                                <TableCell align="right">100</TableCell>
                                <TableCell align="right">Pho</TableCell>
                                <TableCell align="right">Hanh, Tieu</TableCell>
                                <TableCell align="right">PENDING</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    )
}
