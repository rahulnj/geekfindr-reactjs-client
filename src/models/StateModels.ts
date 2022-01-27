export interface AuthState {
    data: string[]
    user: string[]
    error: string[] | null
    loading: boolean
}

export interface UserProfileState {
    data: string[]
    error: string[] | null
    loading: boolean
}
