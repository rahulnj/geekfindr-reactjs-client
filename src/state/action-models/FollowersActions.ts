import { GetFollowingUsersActionType, GetUserFollowersActionType } from "../actiontypes";

//Action model to get all user followers

interface GetUserFollowersRequestAction {
    type: GetUserFollowersActionType.GET_USERFOLLOWERS_REQUEST
}

interface GetUserFollowersSuccessAction {
    type: GetUserFollowersActionType.GET_USERFOLLOWERS_SUCCESS
    payload: string[]
}

interface GetUserFollowersFailAction {
    type: GetUserFollowersActionType.GET_USERFOLLOWERS_FAIL
    payload: string[] | null
}

export type GetUserFollowersAction =
    | GetUserFollowersRequestAction
    | GetUserFollowersSuccessAction
    | GetUserFollowersFailAction


//Action models to get all following users

interface GetFollowingUsersRequestAction {
    type: GetFollowingUsersActionType.GET_FOLLOWINGUSERS_REQUEST
}

interface GetFollowingUsersSuccessAction {
    type: GetFollowingUsersActionType.GET_FOLLOWINGUSERS_SUCCESS
    payload: string[]
}

interface GetFollowingUsersFailAction {
    type: GetFollowingUsersActionType.GET_FOLLOWINGUSERS_FAIL
    payload: string[] | null
}

export type GetFollowingUsersAction =
    | GetFollowingUsersRequestAction
    | GetFollowingUsersSuccessAction
    | GetFollowingUsersFailAction
