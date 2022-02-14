//State Models used in the AuthReducer

export interface AuthState {
    data: string[] | null
    user: string[] | null
    error: string[] | null
    loading: boolean
}

//State Models used in the UserReducer

export interface UsersState {
    data: string[]
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



