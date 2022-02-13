//Authstate Models used in the state
export interface SignupData {
    username: string;
    email: string;
    password: string;
}

export interface SigninData {
    email: string;
    password: string;
}

export interface AuthState {
    data: string[] | null
    user: string[] | null
    error: string[] | null
    loading: boolean
}


//UserState Models used in the state


export interface UserProfileState extends GetUserDetails {
    data: string[]
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface GetUserDetails { }

export interface PostState {
    data: string[]
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface FollowersState {
    data: string[]
    error: string[] | null
    loading: boolean
    success?: boolean
}

//Poststate Models used in the state

export interface PostDataState {
    comments: string[]
    createdAt?: string
    description: string
    id: string
    isOrganization?: boolean
    isProject: boolean
    likeCount: number
    commentCount: number
    mediaType?: string
    mediaURL: string
    owner?: {
        avatar: string
        id: string
        username: string
    }
    teamJoinRequests?: string[]
    updatedAt?: string
    isLiked?: boolean
}