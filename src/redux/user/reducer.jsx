import { UserActionTypes } from "./actions-type"

const initialState = {
    current: null
}

export const userReducer = (state = initialState , action) => {
    switch (action.type){
            case UserActionTypes.LOGIN:
                return{
                    ...state,
                    current: action.payload
                };

                case UserActionTypes.LOGOUT:
                    return{
                        ...state,
                        current: null
                    };
        default:
            return state
    }

}