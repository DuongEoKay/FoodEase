//import {api} from '../../../api/api';
import { api } from '../../config/api';
import {
    DELETE_MENU_ITEM_FAILURE,
    DELETE_MENU_ITEM_REQUEST,
    DELETE_MENU_ITEM_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_REQUEST,
    SEARCH_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
    UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST,
    UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
    CREATE_MENU_ITEM_FAILURE,
    CREATE_MENU_ITEM_REQUEST,
    CREATE_MENU_ITEM_SUCCESS,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,


} from './ActionType';




export const createMenuItem = (menu, jwt) => {
    return async (dispatch) => {
        dispatch({type: CREATE_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.post('/admin/food',{
                menu
            },{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: CREATE_MENU_ITEM_SUCCESS, payload: data});
            console.log("create menu item",data);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: CREATE_MENU_ITEM_FAILURE, payload: error});
        }
    };
};

export const getMenuItemsByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});
        try {
            const {data} = await api.get(`/food/restaurant/${reqData.restaurantId}?isVegan=${reqData.
                vegetarian}&isSeasonal=${reqData.seasonal}
            &categoryId=${reqData.foodCategory}`,
            {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data});
            console.log("get menu items by restaurant id",data);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error});
        }
    };
};


export const searchMenuItem =({keyword, jwt}) => {
    return async (dispatch) => {
        dispatch({type: SEARCH_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.get(`/food/search?name=${keyword}`,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: SEARCH_MENU_ITEM_SUCCESS, payload: data});
            console.log("search menu item",data);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: SEARCH_MENU_ITEM_FAILURE, payload: error});
        }
    };
}

// export const getAllIngredientsOfMenuItem = (reqData) => {
//     return async (dispatch) => {
//         dispatch({type: GET_INGREDIENTS_OF_MENU_ITEM_REQUEST});
//         try {
//             const {data} = await api.get(`/food/ingredients/${reqData.menuItemId}`,{
//                 headers: {
//                     Authorization: `Bearer ${reqData.jwt}`
//                 }
//             });
//             dispatch({type: GET_INGREDIENTS_OF_MENU_ITEM_SUCCESS, payload: data});
//             console.log("get ingredients of menu item",data);
//         } catch (error) {
//             console.log("catch error",error);
//             dispatch({type: GET_INGREDIENTS_OF_MENU_ITEM_FAILURE, payload: error});
//         }
//     };
// }


export const updateMenuItemsAvailability=({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});
        try {
            const {data} = await api.put(`/food/${foodId}`,{},{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data});
            console.log("update menu items availability",data);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error});
        }
    };
}


export const deleteFoodAction = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: DELETE_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.delete(`/admin/food/${foodId}`,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type: DELETE_MENU_ITEM_SUCCESS, payload: data});
            console.log("delete menu item",data);
        } catch (error) {
            console.log("catch error",error);
            dispatch({type: DELETE_MENU_ITEM_FAILURE, payload: error});
        }
    };
}



