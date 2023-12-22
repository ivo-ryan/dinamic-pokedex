import { CartActionsTypes } from "./actions-type";


export const addProductToCart = (payload) => ({
    type: CartActionsTypes.ADD_PRODUCT,
    payload,
})

export const removeProductToCart = (payload) => ({
    type: CartActionsTypes.REMOVE_PRODUCT,
    payload,
})

export const increaseProduct = (payload) => ({
    type: CartActionsTypes.INCREASE_PRODUCT_QUANTITY,
    payload,
})

export const decreaseProduct = (payload) => ({
    type: CartActionsTypes.DECREASE_PRODUCT_QUANTITY,
    payload,
})