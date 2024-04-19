import axios from "axios"
import { API_URL, api } from "../../config/api"
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"



export const registerUser = (data) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })

    try {
        const {data:res} = await axios.post(`${API_URL}/auth/signup`, data.userData)
        if (res.jwt) {
            localStorage.setItem("jwt", res.jwt)
        }
        if (res.role === "ROLE_RESTAURANT_OWNER") {
            data.navigate("/admin/restaurant")
        }
        else {
            data.navigate("/")
        }
        console.log("register success", res)
        dispatch({ type: REGISTER_SUCCESS, payload: res.jwt })
    } catch (error) {
        dispatch({type: REGISTER_FAILURE, payload: error})
        console.log("error", error)

    }

}


export const loginUser = (data) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })

    try {
        const {data:res} = await axios.post(`${API_URL}/auth/signin`, data.userData)
        if (res.jwt) {
            localStorage.setItem("jwt", res.jwt)
        }
        if (res.role === "ROLE_RESTAURANT_OWNER") {
            data.navigate("/admin/restaurant")
        }
        else {
            data.navigate("/")
        }
        console.log("login success", res)
        dispatch({ type: LOGIN_SUCCESS, payload: res.jwt })
    } catch (error) {
        dispatch({type: LOGIN_FAILURE, payload: error})
        console.log("error", error)

    }

}


export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })

    try {
        const {data:res} = await api.get(`/user/profile`,

            { headers: {
                Authorization: `Bearer ${jwt}` 
            } })
        
        dispatch({ type: GET_USER_SUCCESS, payload: res })
        console.log("user profile", res)
    } catch (error) {
        dispatch({type: GET_USER_FAILURE, payload: error})
        console.log("error", error)

    }

}


export const getToFavorite = (jwt, restaurantId) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST })

    try {
        const {data:res} = await api.post(`/restaurants/${restaurantId}/add-favourite`,{},

            { headers: {
                Authorization: `Bearer ${jwt}` 
            } })
        
        dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: res })
        console.log("add to favorite success", res)
    } catch (error) {
        dispatch({type: ADD_TO_FAVORITE_FAILURE, payload: error})
        console.log("error", error)

    }

}


export const logout = () => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST })

    try {
        localStorage.clear()
        dispatch({ type: LOGOUT})
        console.log("logout succes")
    } catch (error) {
        console.log("error", error)

    }

}



