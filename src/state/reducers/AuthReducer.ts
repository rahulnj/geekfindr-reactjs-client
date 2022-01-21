import { SigninAction, SignupAction } from "../action-models/UserActions";
import { UserSigninActionType, UserSignupActionType } from "../actiontypes/UserActionTypes";


interface AuthState {
    data: string[] | null
    error: string[] | null;
    loading: boolean;
}

const initialState = {
    loading: false,
    error: null,
    data: localStorage.getItem("gfr-user") ? JSON.parse(localStorage.getItem("gfr-user") as string) as string[] : null
}

export const UserRegisterAuthReducer = (
    state: AuthState = initialState,
    action: SignupAction
): AuthState => {
    switch (action.type) {
        case UserSignupActionType.USER_SIGNUP_REQUEST:
            return { loading: true, error: null, data: null }
        case UserSignupActionType.USER_SIGNUP_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case UserSignupActionType.USER_SIGNUP_FAIL:
            return { loading: false, error: action.payload, data: null }
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
            return { loading: true, error: null, data: null }
        case UserSigninActionType.USER_SIGNIN_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case UserSigninActionType.USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload, data: null }
        default:
            return state;
    }
}