import { AddProductInProfile } from "./action-types"

const initialState = {
    pokemon: {}
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type){

        case AddProductInProfile.PROFILE_ITEM:
           return {
                ...state,
                pokemon: action.payload
           }

        default:
          return state
    }
}