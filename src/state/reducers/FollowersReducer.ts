import { FollowersState } from "../../models"
import { FollowUserAction, GetFollowingUsersAction, GetUserFollowersAction } from "../action-models"
import { FollowUserActionType, GetFollowingUsersActionType, GetUserFollowersActionType } from "../actiontypes";

const initialState = {
    data: [],
    error: null,
    loading: false,
}

export const GetUserFollowersReducer = (
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

export const GetFollowingUsersReducer = (
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

export const FollowUserReducer = (
    state: FollowersState = initialState,
    action: FollowUserAction
): FollowersState => {
    switch (action.type) {
        case FollowUserActionType.FOLLOW_USER_REQUEST:
            return { ...state, loading: true, success: false, error: null }
        case FollowUserActionType.FOLLOW_USER_SUCCESS:
            return { ...state, loading: false, success: true, error: null }
        case FollowUserActionType.FOLLOW_USER_FAIL:
            return { ...state, loading: false, success: false, error: null }
        default:
            return state;
    }
}