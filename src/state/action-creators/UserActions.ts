import { Dispatch } from "redux"
import request from "../../api"
import { profileData } from "../../models";
import { GetUserDetailsAction, UserEditProfileAction, UserProfileDetailsAction } from "../action-models"
import { GetUserDetailsActionType, UserEditProfileActionType, UserProfileDetailsActionType } from "../actiontypes"

const CurrentUser: profileData = JSON.parse(localStorage.getItem("gfr-user") as string);

export const UserProfileDetails = ({ token }: any) => {

    return async (dispatch: Dispatch<UserProfileDetailsAction>) => {
        dispatch({
            type: UserProfileDetailsActionType.USER_PROFILE_DETAILS_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${CurrentUser?.token}`,
            },
        };
        try {
            const { data } = await request.get('/api/v1/profiles/my-profile', config)
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


export const UserEditProfileDetails = ({ token, editProfileData }: any) => {
    return async (dispatch: Dispatch<UserEditProfileAction>) => {
        dispatch({
            type: UserEditProfileActionType.USER_EDIT_PROFILE_REQUEST
        });

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${CurrentUser?.token}`,
            },
        };
        try {
            const { data } = await request.patch('/api/v1/profiles/my-profile/', editProfileData, config)
            console.log(data);

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

export const GetUserDetails = ({ token, userId }: any) => {
    return async (dispatch: Dispatch<GetUserDetailsAction>) => {
        dispatch({
            type: GetUserDetailsActionType.GET_USERDETAILS_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${CurrentUser?.token}`,
            },
        };
        try {
            const { data } = await request.get(`/api/v1/profiles/${userId}`, config)
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