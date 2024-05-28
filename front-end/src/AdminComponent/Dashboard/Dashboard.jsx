import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { fetchRestaurantsOrder } from '../../component/State/RestaurantOrder/Action';
import { getMenuItemsByRestaurantId } from '../../component/State/Menu/Action';

export const Dashboard = () => {
  const dispatch = useDispatch()
  const {restaurant,restaurantOrder, menu} = useSelector(state => state)
  const jwt = localStorage.getItem('jwt')
  const [mostRecentCustomer, setMostRecentCustomer] = useState(null);
  const [data, setData] = useState([]);
  const totalRevenue = restaurantOrder.orders.reduce((acc, order) => acc + order.totalPrice, 0);
  useEffect(() => {
    dispatch(fetchRestaurantsOrder({ restaurantId: restaurant.usersRestaurant.id, jwt: jwt }))
    dispatch(getMenuItemsByRestaurantId(
      {restaurantId: restaurant.usersRestaurant.id,
      jwt: localStorage.getItem('jwt'),
      vegetarian:true,
      seasonal:true,
      foodCategory:1,
      all:true},
  ))
  }, [])

  useEffect(() => {
    const ordersPerMonth = restaurantOrder.orders.reduce((acc, order) => {
      const date = new Date(order.createdDate);
      const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
      acc[monthYear] = (acc[monthYear] || 0) + 1;
      return acc;
    }, {});

    const newData = Object.keys(ordersPerMonth).map(monthYear => ({ name: monthYear, orders: ordersPerMonth[monthYear] }));
    setData(newData);

    const sortedOrders = [...restaurantOrder.orders].sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
    const recentCustomer = sortedOrders.length > 0 ? sortedOrders[0].customer.fullName : null;
    setMostRecentCustomer(recentCustomer);
  }, [restaurantOrder.orders]);

  return (
    <div className="p-5">
      <h1 className='text-2xl font-semibold text-center py-5'>Restaurant Management Dashboard</h1>
      <div className="chart-container py-6">
        <BarChart width={1500} height={300} data={data} className="mx-auto">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="orders" fill="grey" barSize={30}/>
        </BarChart>
      </div>
      <div className="mt-5 text-lg text-white-700 py-5">Total Food: <span className="font-bold text-red-500">{menu.menuItem.length}</span></div>
      <div className="mt-2 text-lg text-white-700 py-5">Total Revenue: <span className="font-bold text-red-500">{totalRevenue} VND</span></div>
      <div className="mt-2 text-lg text-white-700 py-5 ">Recent Customer: <span className="font-bold text-red-500">{mostRecentCustomer}</span></div>
    </div>
  );
};