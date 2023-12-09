import { CartActionsTypes } from "./actions-type";

const initialState = {
    products: [],
    totalPrice: '',
    productsCount: '',
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type){

       case CartActionsTypes.ADD_PRODUCT:

       const productInCart = state.products.some(product => product.id === action.payload.id)

       if (productInCart) {
        return {
            ...state,
            products: state.products.map(product => product.id === action.payload.id ? {
                ...product, quantity: product.quantity + 1
            }: product)
        }
       }
    return{
        ...state,
        products: [...state.products,{ ...action.payload, quantity: 1}]
    }

    case CartActionsTypes.REMOVE_PRODUCT:

    return{
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
    }
    case CartActionsTypes.INCREASE_PRODUCT_QUANTITY:
        return{
            ...state,
            products: state.products.map(product => product.id === action.payload ? {...product, quantity: product.quantity + 1}: product)
        }

        case CartActionsTypes.DECREASE_PRODUCT_QUANTITY:
            return{
                ...state,
                products: state.products.map(product => product.id === action.payload ? {...product, quantity: product.quantity -1 }: product).filter(product => product.quantity > 0),
            }
        default:
            return state
    }
}