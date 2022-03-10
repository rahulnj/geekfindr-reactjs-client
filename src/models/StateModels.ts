//State Models used in the AuthReducer





//State Models used in the UserReducer



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



