import { combineReducers } from "redux";
import { userReducer } from "./user/reducer"
import { cartReducer } from "./cart/reducer";
import { profileReducer } from "./profile/reducer";

export const rootReducer = combineReducers({userReducer,cartReducer, profileReducer }) 