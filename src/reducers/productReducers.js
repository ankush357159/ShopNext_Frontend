import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
  } from "../constants/productConstants";

export const productListReducer = (state={products:[]}, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                laoding: true,
                products: []
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                laoding: false,
                products: action.payload.products,
                page: action.payload.page,
                pages: action.payload.pages
            }
        case PRODUCT_LIST_FAIL:
            return {
                laoding: false,
                error: action.payload
            } 
        default:
            return state
    }
    
}