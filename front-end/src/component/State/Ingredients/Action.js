import axios from "axios";  
import {
    CREATE_INGREDIENT_CATEGORY_FAILURE,
    CREATE_INGREDIENT_CATEGORY_REQUEST,
    CREATE_INGREDIENT_CATEGORY_SUCCESS,
    CREATE_INGREDIENT_SUCCESS,
    CREATE_INGREDIENT_FAILURE,
    CREATE_INGREDIENT_REQUEST,
    GET_INGREDIENTS,
    GET_INGREDIENT_CATEGORY_REQUEST,
    GET_INGREDIENT_CATEGORY_SUCCESS,
    GET_INGREDIENT_CATEGORY_FAILURE,
    UPDATE_STOCK
} from "./ActionType";

import { api } from "../../config/api";


export const getIngredientsOfRestaurant = ({id, jwt}) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/admin/ingredient/restaurant/${id}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("get ingredients of restaurant", response.data);
            dispatch({
                type: GET_INGREDIENTS,
                payload: response.data
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const createIngredient = ({data, jwt}) => {
    
    return async (dispatch) => {
        dispatch({type: CREATE_INGREDIENT_REQUEST});
        try {
            const response = await api.post('/admin/ingredient/item', data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("create ingredient", response.data);
            dispatch({type: CREATE_INGREDIENT_SUCCESS, payload: response.data});
        } catch (error) {
            console.error(error);
            dispatch({type: CREATE_INGREDIENT_FAILURE, error: error});
        }
    }
}

export const createIngredientCategory = ({data, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_INGREDIENT_CATEGORY_REQUEST});
        try {
            const response = await api.post('/admin/ingredient/category', data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("create ingredient category", response.data);
            dispatch({type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: response.data});
        } catch (error) {
            console.error(error);
            dispatch({type: CREATE_INGREDIENT_CATEGORY_FAILURE, error: error});
        }
    }
}

export const getIngredientCategory = ({id, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_INGREDIENT_CATEGORY_REQUEST});
        try {
            const response = await api.get(`/admin/ingredient/restaurant/${id}/category`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("get ingredient category", response.data);
            dispatch({
                type: GET_INGREDIENT_CATEGORY_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            console.error(error);
            dispatch({type: GET_INGREDIENT_CATEGORY_FAILURE, error: error});
        }
    }
}


export const updateStockOfIngredient=({id, jwt})=>{
    return async (dispatch)=>{
        try{
            const response=await api.put(`/admin/ingredients/${id}/stoke`,{},{
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("update stock of ingredient",response.data);
            dispatch({
                type: UPDATE_STOCK,
                payload: response.data
            });
        }catch(error){
            console.error(error);
        }
    }
}


