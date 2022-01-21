import { UserSigninActionType, UserSignupActionType } from "../actiontypes/UserActionTypes";

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

export type SignupAction =
    | UserSignupRequestAction
    | UserSignupSuccessAction
    | UserSignupFailAction;


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

export type SigninAction =
    | UserSigninRequestAction
    | UserSigninSuccessAction
    | UserSigninFailAction;