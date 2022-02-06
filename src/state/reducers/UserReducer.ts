import { UserProfileState } from "../../models";
import { UserEditProfileAction, UserProfileDetailsAction } from "../action-models";
import { UserEditProfileActionType, UserProfileDetailsActionType } from "../actiontypes";


const initialState = {
    data: [],
    error: null,
    loading: false,
    success: false
}

export const UserProfileDetailsReducer = (
    state: UserProfileState = initialState,
    action: UserProfileDetailsAction
): UserProfileState => {
    switch (action.type) {
        case UserProfileDetailsActionType.USER_PROFILE_DETAILS_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case UserProfileDetailsActionType.USER_PROFILE_DETAILS_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case UserProfileDetailsActionType.USER_PROFILE_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const UserEditProfileDetailsReducer = (
    state: UserProfileState = initialState,
    action: UserEditProfileAction
): UserProfileState => {
    switch (action.type) {
        case UserEditProfileActionType.USER_EDIT_PROFILE_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case UserEditProfileActionType.USER_EDIT_PROFILE_SUCCESS:
            return { ...state, success: true, error: null, data: action.payload }
        case UserEditProfileActionType.USER_EDIT_PROFILE_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}