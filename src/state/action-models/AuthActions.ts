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
    payload: string[] | null
}

interface UserSignupLogoutAction {
    type: UserSignupActionType.USER_lOGOUT;
}


export type SignupAction =
    | UserSignupRequestAction
    | UserSignupSuccessAction
    | UserSignupFailAction
    | UserSignupLoadProfileAction
    | UserSignupLogoutAction

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
    payload: string[] | null
}

interface UserLogoutAction {
    type: UserSigninActionType.USER_lOGOUT;
}

export type SigninAction =
    | UserSigninRequestAction
    | UserSigninSuccessAction
    | UserSigninFailAction
    | UserSigninLoadProfileAction
    | UserLogoutAction




