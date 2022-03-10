export interface FollowersState {
    data: FollowersData[] | []
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface FollowersData {
    avatar: string
    id: string
    role: string
    username: string
}

export interface FollowersModal {
    followersModal?: boolean
    followingModal?: boolean
    username?: string
    role?: string
    userId?: string
    avatar?: string
}

export interface GetUserFollowersActionData {
    token: string
    userId: string
}
