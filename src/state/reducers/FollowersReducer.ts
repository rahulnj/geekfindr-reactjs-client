import { FollowersState } from "../../models"
import { GetFollowingUsersAction, GetUserFollowersAction } from "../action-models"
import { GetFollowingUsersActionType, GetUserFollowersActionType } from "../actiontypes";

const initialState = {
    data: [],
    error: null,
    loading: false,
}

export const GetUserFollowers = (
    state: FollowersState = initialState,
    action: GetUserFollowersAction
): FollowersState => {
    switch (action.type) {
        case GetUserFollowersActionType.GET_USERFOLLOWERS_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case GetUserFollowersActionType.GET_USERFOLLOWERS_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case GetUserFollowersActionType.GET_USERFOLLOWERS_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const GetFollowingUsers = (
    state: FollowersState = initialState,
    action: GetFollowingUsersAction
): FollowersState => {
    switch (action.type) {
        case GetFollowingUsersActionType.GET_FOLLOWINGUSERS_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case GetFollowingUsersActionType.GET_FOLLOWINGUSERS_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case GetFollowingUsersActionType.GET_FOLLOWINGUSERS_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}