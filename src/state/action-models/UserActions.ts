import { UserProfileDetailsActionType, UserEditProfileActionType } from "../actiontypes";

//Action Models for fetching the user profile details

interface UserProfileDetailsRequestAction {
    type: UserProfileDetailsActionType.USER_PROFILE_DETAILS_REQUEST
}

interface UserProfileDetailsSuccessAction {
    type: UserProfileDetailsActionType.USER_PROFILE_DETAILS_SUCCESS
    payload: string[]
}

interface UserProfileDetailsFailAction {
    type: UserProfileDetailsActionType.USER_PROFILE_DETAILS_FAIL
    payload: string[] | null
}

export type UserProfileDetailsAction =
    | UserProfileDetailsRequestAction
    | UserProfileDetailsSuccessAction
    | UserProfileDetailsFailAction


//Action Models for the user Edit profile 

interface UserEditProfileRequestAction {
    type: UserEditProfileActionType.USER_EDIT_PROFILE_REQUEST
}

interface UserEditProfileSuccessAction {
    type: UserEditProfileActionType.USER_EDIT_PROFILE_SUCCESS
    payload: string[]
}

interface UserEditProfileFailAction {
    type: UserEditProfileActionType.USER_EDIT_PROFILE_FAIL
    payload: string[] | null
}

interface UserResetProfileAction {
    type: UserEditProfileActionType.USER_EDIT_PROFILE_RESET
    payload: string[] | null
}

export type EditProfileAction =
    | UserEditProfileRequestAction
    | UserEditProfileSuccessAction
    | UserEditProfileFailAction
    | UserResetProfileAction