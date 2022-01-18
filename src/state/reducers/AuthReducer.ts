import { SignupAction } from "../action-models/UserActions";
import { UserSignupActionType } from "../actiontypes/UserActionTypes";


interface AuthState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

export const SignupAuthReducer = (
    state: AuthState = initialState,
    action: SignupAction
): AuthState => {
    switch (action.type) {
        case UserSignupActionType.USER_SIGNUP_REQUEST:
            return { loading: true, error: null, data: [] }
        case UserSignupActionType.USER_SIGNUP_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case UserSignupActionType.USER_SIGNUP_FAIL:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}