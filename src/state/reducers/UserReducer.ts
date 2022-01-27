import { UserProfileState } from "../../models";
import { UserProfileDetailsAction } from "../action-models";
import { UserProfileDetailsActionType } from "../actiontypes";


const initialState = {
    data: [],
    error: null,
    loading: false
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