import { isPresentInFavourite } from "../../config/logic"
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    favorite: [],
    success: null
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
                success: null
            }

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                jwt: action.payload,
                success: "regiter success"
            }

            case GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            }

        case ADD_TO_FAVORITE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                success: "add to favorite success",
                favorite: isPresentInFavourite(state.favorite, action.payload)
                    ? state.favorite.filter((item) => item.id === action.payload.id)
                    : [...state.favorite, action.payload]
            }


        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case ADD_TO_FAVORITE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                success: null
            }


        case LOGOUT:
            return initialState;
            


        default:
            return state;
    };
}