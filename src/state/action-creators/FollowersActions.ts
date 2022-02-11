import { Dispatch } from "redux"
import request from "../../api"
import { GetFollowingUsersAction, GetUserFollowersAction } from "../action-models"
import { GetFollowingUsersActionType, GetUserFollowersActionType } from "../actiontypes"

export const GetUserFollowers = ({ token, userId }: any) => {
    return async (dispatch: Dispatch<GetUserFollowersAction>) => {
        dispatch({
            type: GetUserFollowersActionType.GET_USERFOLLOWERS_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get(`/api/v1/profiles/${userId}/followers`, config)
            dispatch({
                type: GetUserFollowersActionType.GET_USERFOLLOWERS_SUCCESS,
                payload: data
            })
            console.log(data);
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetUserFollowersActionType.GET_USERFOLLOWERS_FAIL,
                payload: error
            })
        }
    }
}

export const GetFollowingUsers = ({ token, userId }: any) => {
    return async (dispatch: Dispatch<GetFollowingUsersAction>) => {
        dispatch({
            type: GetFollowingUsersActionType.GET_FOLLOWINGUSERS_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get(`/api/v1/profiles/${userId}/following`, config)
            dispatch({
                type: GetFollowingUsersActionType.GET_FOLLOWINGUSERS_SUCCESS,
                payload: data
            })
            console.log(data);
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetFollowingUsersActionType.GET_FOLLOWINGUSERS_FAIL,
                payload: error
            })
        }
    }
}