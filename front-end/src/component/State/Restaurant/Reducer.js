import * as actionTypes from './ActionType';

const initialState = {
    restaurants: [],
    usersRestaurant: null,
    loading: false,
    error: null,
    events: [],
    restaurantsEvents: [],
    categories: [],
};


export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.GET_RESTAURANT_BY_USER_ID_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_RESTAURANT_BY_USER_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                usersRestaurant: action.payload
            };
        case actionTypes.GET_RESTAURANT_BY_USER_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
            
        case actionTypes.CREATE_RESTAURANT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.CREATE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload
            };
        case actionTypes.CREATE_RESTAURANT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case actionTypes.GET_ALL_RESTAURANTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_ALL_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload
            };
        case actionTypes.GET_ALL_RESTAURANTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case actionTypes.GET_RESTAURANT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                usersRestaurant: action.payload
            };
        case actionTypes.GET_RESTAURANT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case actionTypes.DELETE_RESTAURANT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.DELETE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload
            };
        case actionTypes.DELETE_RESTAURANT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case actionTypes.GET_ALL_EVENTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_ALL_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.payload
            };
        case actionTypes.GET_ALL_EVENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case actionTypes.GET_RESTAURANTS_EVENTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_RESTAURANTS_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurantsEvents: action.payload
            };
        case actionTypes.GET_RESTAURANTS_EVENTS_FAILURE:
            return {
                ...state,

            };
        case actionTypes.GET_RESTAURANT_BY_ID_SUCCESS:
            return {
                ...state,
                restaurants: action.payload,
                loading: false,
                error: null,

            };
        case actionTypes.GET_RESTAURANT_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case actionTypes.GET_RESTAURANT_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_RESTAURANTS_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_RESTAURANTS_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            };
        case actionTypes.GET_RESTAURANTS_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    };
};
export default restaurantReducer;

