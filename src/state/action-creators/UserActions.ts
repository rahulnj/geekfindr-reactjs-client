import { Dispatch } from "redux"
import request from "../../api"

import {
    GetUserDetailsActionData,
    UserData,
    UserEditProfileDetailsActionData
} from "../../models";

import {
    GetUserDetailsAction,
    UserEditProfileAction,
    UserProfileDetailsAction
} from "../action-models"

import {
    GetUserDetailsActionType,
    UserEditProfileActionType,
    UserProfileDetailsActionType
} from "../actiontypes"


export const UserProfileDetails = (token: string) => {
    return async (dispatch: Dispatch<UserProfileDetailsAction>) => {
        dispatch({
            type: UserProfileDetailsActionType.USER_PROFILE_DETAILS_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get<UserData>('/api/v1/profiles/my-profile', config)
            dispatch({
                type: UserProfileDetailsActionType.USER_PROFILE_DETAILS_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: UserProfileDetailsActionType.USER_PROFILE_DETAILS_FAIL,
                payload: error
            })
        }
    }
}


export const UserEditProfileDetails = ({ token, editProfileData }: UserEditProfileDetailsActionData) => {
    return async (dispatch: Dispatch<UserEditProfileAction>) => {
        dispatch({
            type: UserEditProfileActionType.USER_EDIT_PROFILE_REQUEST
        });

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.patch<UserData>('/api/v1/profiles/my-profile/', editProfileData, config)
            dispatch({
                type: UserEditProfileActionType.USER_EDIT_PROFILE_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: UserEditProfileActionType.USER_EDIT_PROFILE_FAIL,
                payload: error
            })
        }
    }
}

export const GetUserDetails = ({ token, userId }: GetUserDetailsActionData) => {
    return async (dispatch: Dispatch<GetUserDetailsAction>) => {
        dispatch({
            type: GetUserDetailsActionType.GET_USERDETAILS_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get<UserData>(`/api/v1/profiles/${userId}`, config)
            dispatch({
                type: GetUserDetailsActionType.GET_USERDETAILS_SUCCESS,
                payload: data
            });
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetUserDetailsActionType.GET_USERDETAILS_FAIL,
                payload: error
            });
        }
    }
}