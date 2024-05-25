import {LOGOUT} from '../Authentication/ActionType';
import * as actionTypes from './ActionType';

const initialState = {
    cart: null,
    cartItems:[],
    loading: false,
    error: null,
};

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.CREATE_CART_REQUEST:
        case actionTypes.FIND_CART_REQUEST:
        case actionTypes.GET_ALL_CART_ITEMS_REQUEST:
        case actionTypes.ADD_ITEM_TO_CART_REQUEST:
        case actionTypes.REMOVE_CARTITEM_REQUEST:
        return {
            ...state,
            loading: true,
            error: null
        };
        case actionTypes.UPDATE_CARTITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.CREATE_CART_SUCCESS:
        case actionTypes.FIND_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload
            };
        case actionTypes.GET_ALL_CART_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: action.payload.cartItems
            };
        case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: [ action.payload,...state.cart.cartItems]
            };
        case actionTypes.REMOVE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.payload
                )
            };
        case actionTypes.UPDATE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                )
            };
        case actionTypes.CREATE_CART_FAILURE:
        case actionTypes.FIND_CART_FAILURE:
        case actionTypes.GET_ALL_CART_ITEMS_FAILURE:
        case actionTypes.ADD_ITEM_TO_CART_FAILURE:
        case actionTypes.REMOVE_CARTITEM_FAILURE:
        case actionTypes.UPDATE_CARTITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case LOGOUT:
            return {
                ...state,
                cart: null,
                cartItems: []
            };
        default:
            return state;
    }
}

export default cartReducer;