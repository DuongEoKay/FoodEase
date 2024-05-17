import * as actionTypes from './ActionType';

const initialState = {
    menuItem:[],
    loading: false,
    error: null,
    search:[],
    message: null
};


const menuItemReducer =(state=initialState, action) => {
    switch(action.type) {
    case actionTypes.CREATE_MENU_ITEM_REQUEST:
    case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
    case actionTypes.DELETE_MENU_ITEM_REQUEST:
    case actionTypes.SEARCH_MENU_ITEM_REQUEST:
    case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:
        return {
            ...state,
            loading: true,
            error: null
        };
    case actionTypes.CREATE_MENU_ITEM_SUCCESS:
        return {
            ...state,
            loading: false,
            menuItem: action.payload
        };
    case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:  
        return {
            ...state,
            loading: false,
            menuItem: action.payload
        };
    case actionTypes.DELETE_MENU_ITEM_SUCCESS:
        return {
            ...state,
            loading: false,
            menuItem: state.menuItems.filter(
                (item) => item.id !== action.payload               
            )
        };
    case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
        console.log("Update Menu Item Availability Success");
        return {
            ...state,
            loading: false,
            menuItem: state.menuItems.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        };

    case actionTypes.SEARCH_MENU_ITEM_SUCCESS:
        return {
            ...state,
            loading: false,
            search: action.payload
        };

    case actionTypes.CREATE_MENU_ITEM_FAILURE:
    case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
    case actionTypes.DELETE_MENU_ITEM_FAILURE:
    case actionTypes.SEARCH_MENU_ITEM_FAILURE:
    case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.error
        };
    default:
        return state;
    }
};

export default menuItemReducer;