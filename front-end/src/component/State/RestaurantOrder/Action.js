import axios from 'axios';
import {
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE,
    GET_RESTAURANTS_ORDER_REQUEST,
    GET_RESTAURANTS_ORDER_SUCCESS,
    GET_RESTAURANTS_ORDER_FAILURE

} from './ActionType';

import { api } from '../../config/api';

export const updateOrderStatus = ({orderId, orderStatus, jwt})=>{
    return async (dispatch)=>{
        dispatch({type: UPDATE_ORDER_STATUS_REQUEST});
        try{
            const response = await api.put(api.updateOrderStatus, {orderId, orderStatus}, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            });
            console.log("update order status", response.data);
            dispatch({type: UPDATE_ORDER_STATUS_SUCCESS, payload: response.data});
        }catch(error){
            console.log("update order status error", error);
            dispatch({type: UPDATE_ORDER_STATUS_FAILURE, payload: error});
        }
    }
}


export const fetchRestaurantsOrder=({restaurantId, orderStatus, jwt})=>{
    return async (dispatch)=>{
        dispatch({type: GET_RESTAURANTS_ORDER_REQUEST});
        try{
            const response = await api.get(`admin/order/restaurant/${restaurantId}`,{
                params: {order_status:orderStatus},
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            });
            console.log("fetch restaurant order", response.data);
            dispatch({type: GET_RESTAURANTS_ORDER_SUCCESS, payload: response.data});
        }catch(error){
            console.log("fetch restaurant order error", error);
            dispatch({type: GET_RESTAURANTS_ORDER_FAILURE, payload: error});
        }
    }
}