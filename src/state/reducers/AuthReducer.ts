import { AuthState } from "../../models";
import { SigninAction, SignupAction } from "../action-models";
import { UserSigninActionType, UserSignupActionType } from "../actiontypes/AuthActionTypes";


const initialState = {
    loading: false,
    error: null,
    data: localStorage.getItem("gfr-user") ? JSON.parse(localStorage.getItem("gfr-user") as string) as string[] : [],
    user: localStorage.getItem("gfr-user") ? JSON.parse(localStorage.getItem("gfr-user") as string) as string[] : []
}

export const UserRegisterAuthReducer = (
    state: AuthState = initialState,
    action: SignupAction
): AuthState => {
    switch (action.type) {
        case UserSignupActionType.USER_SIGNUP_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case UserSignupActionType.USER_SIGNUP_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case UserSignupActionType.USER_SIGNUP_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        case UserSignupActionType.LOAD_USER_PROFILE:
            return { ...state, user: action.payload }
        case UserSignupActionType.USER_lOGOUT:
            return { data: [], error: null, loading: false, user: [] }
        default:
            return state;
    }
}

export const UserSigninAuthReducer = (
    state: AuthState = initialState,
    action: SigninAction
): AuthState => {
    switch (action.type) {
        case UserSigninActionType.USER_SIGNIN_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case UserSigninActionType.USER_SIGNIN_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case UserSigninActionType.USER_SIGNIN_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        case UserSigninActionType.LOAD_USER_PROFILE:
            return { ...state, user: action.payload }
        case UserSigninActionType.USER_lOGOUT:
            return { data: [], error: null, loading: false, user: [] }
        default:
            return state;
    }
}
