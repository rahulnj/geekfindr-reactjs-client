import { FollowersData } from "../../models";

import {
    FollowUserActionType,
    GetFollowingUsersActionType,
    GetUserFollowersActionType
} from "../actiontypes";

//Action model to get all user followers

interface GetUserFollowersRequestAction {
    type: GetUserFollowersActionType.GET_USERFOLLOWERS_REQUEST
}

interface GetUserFollowersSuccessAction {
    type: GetUserFollowersActionType.GET_USERFOLLOWERS_SUCCESS
    payload: FollowersData[] | []
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
    payload: FollowersData[] | []
}

interface GetFollowingUsersFailAction {
    type: GetFollowingUsersActionType.GET_FOLLOWINGUSERS_FAIL
    payload: string[] | null
}

export type GetFollowingUsersAction =
    | GetFollowingUsersRequestAction
    | GetFollowingUsersSuccessAction
    | GetFollowingUsersFailAction


//Action models to follow a user

interface FollowUserRequestAction {
    type: FollowUserActionType.FOLLOW_USER_REQUEST
}

interface FollowUserSuccessAction {
    type: FollowUserActionType.FOLLOW_USER_SUCCESS
    payload: string[]
}

interface FollowUserFailAction {
    type: FollowUserActionType.FOLLOW_USER_FAIL
    payload: string[] | null
}

export type FollowUserAction =
    | FollowUserRequestAction
    | FollowUserSuccessAction
    | FollowUserFailAction
