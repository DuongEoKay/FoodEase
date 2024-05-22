import { LOGOUT } from "../Authentication/ActionType";
import { api } from "../../config/api";
import {
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    FIND_ORDER_FAILURE,
    FIND_ORDER_REQUEST,
    FIND_ORDER_SUCCESS,
    GET_ALL_ORDERS_FAILURE,
    GET_ALL_ORDERS_REQUEST,
    GET_ALL_ORDERS_SUCCESS,
    GET_USERS_ORDERS_FAILURE,
    GET_USERS_ORDERS_REQUEST,
    GET_USERS_ORDERS_SUCCESS,
    UPDATE_ORDER_FAILURE,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS
} from "./ActionType";

export const createOrder=(reqData)=>{
    return async (dispatch)=>{
        dispatch({type: CREATE_ORDER_REQUEST});
        try{
            const{data}=await api.post('/order/', reqData.order,{
                headers:{
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
            if(data.payment_url)
            {
                window.location.href=data.payment_url;
            }
            console.log("create order",data);
            dispatch({type: CREATE_ORDER_SUCCESS, payload:data});
        }catch(error){
            console.log("create order error",error);
                dispatch({type: CREATE_ORDER_FAILURE, error:error});
            }

        }
}



export const getUsersOrders =(jwt)=>{
    return async (dispatch)=>{
        dispatch({type: GET_USERS_ORDERS_REQUEST});
        try{
            const{data}=await api.get('/order/user',{
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("get user orders",data);
            dispatch({type: GET_USERS_ORDERS_SUCCESS, payload:data});
        }catch(error){
            console.log("get user orders error",error);
            dispatch({type: GET_USERS_ORDERS_FAILURE, error:error});
        }
    }
}

