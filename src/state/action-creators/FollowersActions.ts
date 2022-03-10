import { Dispatch } from "redux"
import request from "../../api"
import { FollowersData, GetUserFollowersActionData, UserData } from "../../models";
import { FollowUserAction, GetFollowingUsersAction, GetUserFollowersAction } from "../action-models"
import { FollowUserActionType, GetFollowingUsersActionType, GetUserFollowersActionType } from "../actiontypes"



const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);

export const GetUserFollowers = ({ token, userId }: GetUserFollowersActionData) => {
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
            const { data } = await request.get<FollowersData[]>(`/api/v1/profiles/${userId}/followers`, config)
            dispatch({
                type: GetUserFollowersActionType.GET_USERFOLLOWERS_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetUserFollowersActionType.GET_USERFOLLOWERS_FAIL,
                payload: error
            })
        }
    }
}

export const GetFollowingUsers = ({ token, userId }: GetUserFollowersActionData) => {
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
            const { data } = await request.get<FollowersData[]>(`/api/v1/profiles/${userId}/following`, config)
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

export const FollowUser = ({ token, userId }: GetUserFollowersActionData) => {
    return async (dispatch: Dispatch<FollowUserAction>) => {
        dispatch({
            type: FollowUserActionType.FOLLOW_USER_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        };
        try {
            const { data } = await request.post('/api/v1/profiles/following', { id: userId }, config)
            dispatch({
                type: FollowUserActionType.FOLLOW_USER_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: FollowUserActionType.FOLLOW_USER_FAIL,
                payload: error
            })
        }
    }
}