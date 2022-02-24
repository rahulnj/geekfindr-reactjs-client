//State Models used in the AuthReducer

import {
    UserAuthData
    , UserProfileDetailsData
} from ".";

export interface AuthState {
    data: UserAuthData | null
    user: UserAuthData | null
    error: string[] | null
    loading: boolean
}

//State Models used in the UserReducer

export interface UsersState {
    data: UserProfileDetailsData | null
    error: string[] | null
    loading: boolean
    success?: boolean
}

//State Models used in the PostReducer

export interface PostState {
    data: string[]
    error: string[] | null
    loading: boolean
    success?: boolean
}

//State Models used in the FollowersReducer

export interface FollowersState {
    data: string[]
    error: string[] | null
    loading: boolean
    success?: boolean
}

//State Models used in the ProjectReducer

export interface ProjectState {
    data: string[]
    error: string[] | null
    loading: boolean
    success?: boolean
}



