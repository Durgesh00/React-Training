import { LOGIN_REDUCER } from "../shared/actionConstants"
import apiHelper from '../apis/apiHelper'

export const setUserDetails = data => {
    return {
        type: LOGIN_REDUCER.SET_USER_DETAILS,
        value: data
    }
}

export const loginRequest = (data) => {
    return apiHelper(data)
}