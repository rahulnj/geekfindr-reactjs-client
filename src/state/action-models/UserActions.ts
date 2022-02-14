import { UserProfileDetailsActionType, UserEditProfileActionType, GetUserDetailsActionType } from "../actiontypes";

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

export type UserEditProfileAction =
    | UserEditProfileRequestAction
    | UserEditProfileSuccessAction
    | UserEditProfileFailAction

//Action for getting other user's details

interface GetUserDetailsRequestAction {
    type: GetUserDetailsActionType.GET_USERDETAILS_REQUEST
}

interface GetUserDetailsSuccessAction {
    type: GetUserDetailsActionType.GET_USERDETAILS_SUCCESS
    payload: string[]
}

interface GetUserDetailsFailAction {
    type: GetUserDetailsActionType.GET_USERDETAILS_FAIL
    payload: string[] | null
}

export type GetUserDetailsAction =
    | GetUserDetailsRequestAction
    | GetUserDetailsSuccessAction
    | GetUserDetailsFailAction