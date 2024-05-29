import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchRestaurants } from '../State/Search/Action';
import { getAllRestaurantsAction } from '../State/Restaurant/Action';
import RestaurantCard from '../Restaurant/RestaurantCard';

export const SearchResult = () => {
  const dispatch = useDispatch();
  const { search, restaurant } = useSelector(state => state)
  const [results, setResults] = useState([]);
  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    dispatch(getAllRestaurantsAction(jwt))
  }, [])
  useEffect(() => {
    dispatch(searchRestaurants({ searchTerm: search.term }));
  }, [search.term, dispatch]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const restaurants = search.restaurants.map(item => {
        for (let i = 0; i < restaurant.restaurants.length; i++) {
          if (restaurant.restaurants[i].id === item.id) {
            return restaurant.restaurants[i];
          }
        }
      });
      setResults(restaurants);
    };

    fetchRestaurants();
  }, [search.restaurants, restaurant]);



const content = results.length ? (
  <div className="flex flex-col space-y-9 items-center">
    {results.map(restaurant => <RestaurantCard key={restaurant.id} item={restaurant} />)}
  </div>
) : (
  <article className="flex justify-center items-center h-screen">
    <p className="text-xl text-gray-500">No Matching Restaurants</p>
  </article>
)
console.log("restaurant", restaurant);
return (
  <div>
<p className="text-left text-xl text-gray-400 mt-7 ml-7 ">Here the result: </p>
    <main className="flex justify-center  h-screen">{content}</main>
  </div>  
)
}