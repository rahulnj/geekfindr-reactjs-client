import { UsersState } from "../../models";
import { GetUserDetailsAction, UserEditProfileAction, UserProfileDetailsAction } from "../action-models";
import { GetUserDetailsActionType, UserEditProfileActionType, UserProfileDetailsActionType } from "../actiontypes";


const initialState = {
    data: null,
    error: null,
    loading: false,
    success: false
}

export const UserProfileDetailsReducer = (
    state: UsersState = initialState,
    action: UserProfileDetailsAction
): UsersState => {
    switch (action.type) {
        case UserProfileDetailsActionType.USER_PROFILE_DETAILS_REQUEST:
            return { ...state, loading: true, error: null, data: null }
        case UserProfileDetailsActionType.USER_PROFILE_DETAILS_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case UserProfileDetailsActionType.USER_PROFILE_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload, data: null }
        default:
            return state;
    }
}

export const UserEditProfileDetailsReducer = (
    state: UsersState = initialState,
    action: UserEditProfileAction
): UsersState => {
    switch (action.type) {
        case UserEditProfileActionType.USER_EDIT_PROFILE_REQUEST:
            return { ...state, loading: true, error: null, data: null }
        case UserEditProfileActionType.USER_EDIT_PROFILE_SUCCESS:
            return { ...state, success: true, error: null, data: action.payload }
        case UserEditProfileActionType.USER_EDIT_PROFILE_FAIL:
            return { ...state, loading: false, error: action.payload, data: null }
        default:
            return state;
    }
}

export const GetUserDetailsReducer = (
    state: UsersState = initialState,
    action: GetUserDetailsAction
): UsersState => {
    switch (action.type) {
        case GetUserDetailsActionType.GET_USERDETAILS_REQUEST:
            return { ...state, loading: true, error: null, data: null }
        case GetUserDetailsActionType.GET_USERDETAILS_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case GetUserDetailsActionType.GET_USERDETAILS_FAIL:
            return { ...state, loading: false, error: action.payload, data: null }
        default:
            return state;
    }
}