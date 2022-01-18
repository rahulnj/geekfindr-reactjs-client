import { UserSignupActionType } from "../actiontypes/UserActionTypes";

interface UserSignupRequestAction {
    type: UserSignupActionType.USER_SIGNUP_REQUEST;
}

interface UserSignupSuccessAction {
    type: UserSignupActionType.USER_SIGNUP_SUCCESS;
    payload: string[];
}

interface UserSignupFailAction {
    type: UserSignupActionType.USER_SIGNUP_FAIL;
    payload: string;
}

export type SignupAction =
    | UserSignupRequestAction
    | UserSignupSuccessAction
    | UserSignupFailAction;