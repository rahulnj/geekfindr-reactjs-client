import { UserSigninActionType, UserSignupActionType } from "../actiontypes"


//Action Models for the user signup in the AuthReducer.


interface UserSignupRequestAction {
    type: UserSignupActionType.USER_SIGNUP_REQUEST;
}

interface UserSignupSuccessAction {
    type: UserSignupActionType.USER_SIGNUP_SUCCESS;
    payload: string[];
}

interface UserSignupFailAction {
    type: UserSignupActionType.USER_SIGNUP_FAIL;
    payload: string[] | null
}

interface UserSignupLoadProfileAction {
    type: UserSignupActionType.LOAD_USER_PROFILE;
    payload: string[]
}

interface UserSignupLogoutRequestAction {
    type: UserSignupActionType.USER_LOGOUT_REQUEST;
}

interface UserSignupLogoutSuccessAction {
    type: UserSignupActionType.USER_LOGOUT_SUCCESS;
    user: null;
    data: null;
}

export type SignupAction =
    | UserSignupRequestAction
    | UserSignupSuccessAction
    | UserSignupFailAction
    | UserSignupLoadProfileAction
    | UserSignupLogoutRequestAction
    | UserSignupLogoutSuccessAction

//Action Models for the user signin in the AuthReducer

interface UserSigninRequestAction {
    type: UserSigninActionType.USER_SIGNIN_REQUEST;
}

interface UserSigninSuccessAction {
    type: UserSigninActionType.USER_SIGNIN_SUCCESS;
    payload: string[];
}

interface UserSigninFailAction {
    type: UserSigninActionType.USER_SIGNIN_FAIL;
    payload: string[] | null
}

interface UserSigninLoadProfileAction {
    type: UserSigninActionType.LOAD_USER_PROFILE;
    payload: string[]
}

interface UserSigninLogoutRequestAction {
    type: UserSigninActionType.USER_LOGOUT_REQUEST;
}

interface UserSigninLogoutSuccessAction {
    type: UserSigninActionType.USER_LOGOUT_SUCCESS;
    user: null;
    data: null;
}

export type SigninAction =
    | UserSigninRequestAction
    | UserSigninSuccessAction
    | UserSigninFailAction
    | UserSigninLoadProfileAction
    | UserSigninLogoutRequestAction
    | UserSigninLogoutSuccessAction




