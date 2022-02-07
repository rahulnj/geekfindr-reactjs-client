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


export interface UserProfileState {
    data: string[]
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface PostState {
    data: string[]
    error: string[] | null
    loading: boolean
    success?: boolean
}


//Poststate Models used in the state

export interface PostDataState {
    comments?: string[]
    createdAt?: string
    description: string
    id?: string
    isOrganization?: boolean
    isProject: boolean
    likeCount: number
    mediaType?: string
    mediaURL: string
    owner?: string
    teamJoinRequests?: string[]
    updatedAt?: string
}