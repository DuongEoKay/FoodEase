import { api } from '../../config/api';
import {
    ADD_ITEM_TO_CART_FAILURE,
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    CREATE_CART_FAILURE,
    CREATE_CART_REQUEST,
    CREATE_CART_SUCCESS,
    FIND_CART_FAILURE,
    FIND_CART_REQUEST,
    FIND_CART_SUCCESS,
    GET_ALL_CART_ITEMS_FAILURE,
    GET_ALL_CART_ITEMS_REQUEST,
    GET_ALL_CART_ITEMS_SUCCESS,
    REMOVE_CARTITEM_FAILURE,
    REMOVE_CARTITEM_REQUEST,
    REMOVE_CARTITEM_SUCCESS,
    UPDATE_CARTITEM_FAILURE,
    UPDATE_CARTITEM_REQUEST,
    UPDATE_CARTITEM_SUCCESS,
    CLEAR_CART_FAILURE,
    CLEAR_CART_REQUEST,
    CLEAR_CART_SUCCESS

} from './ActionType';


export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({type: FIND_CART_REQUEST});
        try {
            const response = api.get(`/cart/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({type: FIND_CART_SUCCESS, payload: (await response).data});
            console.log("cart: ",(await response).data);
        }
        catch (error) {
            dispatch({type: FIND_CART_FAILURE, error: error});
        }
    }
};

export const getAllCartItems=(reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_CART_ITEMS_REQUEST});
        try {
            const response = api.get(`/cart/${reqData.cartId}/items`, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`
                }
            });
            dispatch({type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data});
        }
        catch (error) {
            dispatch({type: GET_ALL_CART_ITEMS_FAILURE, error: error});
        }
    }
} 



export const addItemtoCart=(reqData) => {
    console.log("reqData",reqData);
    return async (dispatch) => {
        dispatch({type: ADD_ITEM_TO_CART_REQUEST});
        try {
            const response = api.post(`/cart/`, reqData.cartItem, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`
                }
            });
            dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload: response.data});
            console.log("add item to cart",(await response).data);
        }
        catch (error) {
            dispatch({type: ADD_ITEM_TO_CART_FAILURE, error: error});
        }
    }
}

export const updateCartItem = (data,jwt) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_CARTITEM_REQUEST});
        try {
            const response = await api.put(`/cart/update`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: UPDATE_CARTITEM_SUCCESS, payload: response.data});
        }
        catch (error) {
            dispatch({type: UPDATE_CARTITEM_FAILURE, error: error});
        }
    }
}


export const removeCartItem = (id,jwt) => {
    return async (dispatch) => {
        dispatch({type: REMOVE_CARTITEM_REQUEST});
        try {
            const response = await api.delete(`/cart/${id}/remove`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: REMOVE_CARTITEM_SUCCESS, payload: response.cartItemId});
        }
        catch (error) {
            dispatch({type: REMOVE_CARTITEM_FAILURE, error: error});
        }
    }
}

export const clearCartAction = () => {
    return async (dispatch) => {
        dispatch({type: CLEAR_CART_REQUEST});
        try {
            const response = api.delete(`/cart/clear`, {},{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            });
            dispatch({type: CLEAR_CART_SUCCESS, payload: response.cartItemId});
        }
        catch (error) {
            dispatch({type: CLEAR_CART_FAILURE, error: error});
        }
    }
}

