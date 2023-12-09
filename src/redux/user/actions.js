import { UserActionTypes } from "./actions-type";

export const userLogin = (payload) => ({
    type: UserActionTypes.LOGIN,
    payload,
});

export const userLogout = () => ({
    type: UserActionTypes.LOGOUT
})