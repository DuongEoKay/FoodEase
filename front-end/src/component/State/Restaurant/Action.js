import {api} from '../../../api/api';
import {
    CREATE_CATEGORY_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_EVENTS_FAILURE,
    CREATE_EVENTS_REQUEST,
    CREATE_EVENTS_SUCCESS,
    CREATE_RESTAURANT_FAILURE,
    CREATE_RESTAURANT_REQUEST,
    CREATE_RESTAURANT_SUCCESS,
    DELETE_EVENTS_FAILURE,
    DELETE_EVENTS_REQUEST,
    DELETE_EVENTS_SUCCESS,
    DELETE_RESTAURANT_FAILURE,
    DELETE_RESTAURANT_REQUEST,
    DELETE_RESTAURANT_SUCCESS,
    GET_ALL_EVENTS_FAILURE,
    GET_ALL_EVENTS_REQUEST,
    GET_ALL_EVENTS_SUCCESS,
    GET_ALL_RESTAURANT_FAILURE,
    GET_ALL_RESTAURANT_REQUEST,
    GET_ALL_RESTAURANT_SUCCESS,
    GET_RESTAURANT_BY_ID_FAILURE,
    GET_RESTAURANT_BY_ID_REQUEST,
    GET_RESTAURANT_BY_ID_SUCCESS,
    GET_RESTAURANT_BY_USER_ID_FAILURE,
    GET_RESTAURANT_BY_USER_ID_REQUEST,
    GET_RESTAURANT_BY_USER_ID_SUCCESS,
    GET_RESTAURANTS_CATEGORY_FAILURE,
    GET_RESTAURANTS_CATEGORY_REQUEST,
    GET_RESTAURANTS_CATEGORY_SUCCESS,
    GET_RESTAURANTS_EVENTS_FAILURE,
    GET_RESTAURANTS_EVENTS_REQUEST,
    GET_RESTAURANTS_EVENTS_SUCCESS,
    UPDATE_RESTAURANT_STATUS_FAILURE,
    UPDATE_RESTAURANT_STATUS_REQUEST,
    UPDATE_RESTAURANT_STATUS_SUCCESS,
    UPDATE_RESTAURANT_FAILURE,
    UPDATE_RESTAURANT_REQUEST,
    UPDATE_RESTAURANT_SUCCESS
} from './ActionType';


export const getAllRestaurantsAction = (token) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_RESTAURANT_REQUEST});
        try {
            const {response} = await api.get('/restaurants',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({type: GET_ALL_RESTAURANT_SUCCESS, payload: response});
            console.log("all restaurant",response);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: GET_ALL_RESTAURANT_FAILURE, payload: error});
        }
    };
}


export const getRestaurantById = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_BY_ID_REQUEST});
        try {
            const {response} = await api.get(`/restaurants/${reqData.restaurantId}`,{
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
            console.log("get restaurant by user id",response);
            dispatch({type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: GET_RESTAURANT_BY_ID_FAILURE, payload:error});
        }
    };
}

export const createRestaurant = (reqData) => {
    return async (dispatch) => {
        dispatch({type: CREATE_RESTAURANT_REQUEST});
        try {
            const {response} = await api.post('/admin/restaurant/create', reqData,{
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
            dispatch({type: CREATE_RESTAURANT_SUCCESS, payload: response});
            console.log("create restaurant",response);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: CREATE_RESTAURANT_FAILURE, payload: error});
        }
    };
}


export const updateRestaurant =({restaurantId, restaurantData, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_RESTAURANT_REQUEST});
        try {
            const {response} = await api.put(`/admin/restaurant/${restaurantId}`, restaurantData,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: UPDATE_RESTAURANT_SUCCESS, payload: response});
            console.log("update restaurant",response);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: UPDATE_RESTAURANT_FAILURE, payload: error});
        }
        
    };
}

export const deleteRestaurant = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: DELETE_RESTAURANT_REQUEST});
        try {
            const {response} = await api.delete(`/admin/restaurant/${restaurantId}`,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: DELETE_RESTAURANT_SUCCESS, payload: response});
            console.log("delete restaurant",response);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: DELETE_RESTAURANT_FAILURE, payload: error});
        }
    };
}

export const updateRestaurantStatus = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_RESTAURANT_STATUS_REQUEST});
        try {
            const {response} = await api.put(`/admin/restaurant/${restaurantId}/status`,{},{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: response});
            console.log("update restaurant status",response);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error});
        }
    };
}

const createEventsAction = ({data, jwt, restaurantId}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_EVENTS_REQUEST});
        try {
            const {response} = await api.post(`/admin/restaurant/events/${restaurantId}`, data,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: CREATE_EVENTS_SUCCESS, payload: response});
            console.log("create events",response);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: CREATE_EVENTS_FAILURE, payload: error});
        }
    };
}

const getAllEvent=({jwt})=>{
    return async (dispatch) => {
        dispatch({type: GET_ALL_EVENTS_REQUEST});
        try {
            const {response} = await api.get('/events',{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: GET_ALL_EVENTS_SUCCESS, payload: response});
            console.log("get all events",response);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: GET_ALL_EVENTS_FAILURE, payload: error});
        }
    };
}

export const deleteEvents = ({eventId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: DELETE_EVENTS_REQUEST});
        try {
            const {response} = await api.delete(`/admin/events/${eventId}`,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: DELETE_EVENTS_SUCCESS, payload: response});
            console.log("delete events",response);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: DELETE_EVENTS_FAILURE, payload: error});
        }
    };
}


export const getRestaurantsEvents = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANTS_EVENTS_REQUEST});
        try {
            const {response} = await api.get(`/admin/events/restaurants/${restaurantId}`,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: response});
            console.log("get restaurant events",response);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error});
        }
    };
}

export const createCategoryAction = ({reqData, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_CATEGORY_REQUEST});
        try {
            const {response} = await api.post('/admin/category', reqData,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: CREATE_CATEGORY_SUCCESS, payload: response});
            console.log("create category",response);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: CREATE_CATEGORY_FAILURE, payload: error});
        }
    };
}

export const getRestaurantsCategory = ({jwt, restaurantId}) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANTS_CATEGORY_REQUEST});
        try {
            const {response} = await api.get(`/category/restaurant/${restaurantId}`,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: response});
            console.log("get restaurant category",response);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error});
        }
    };
}



