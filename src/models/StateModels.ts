export interface AuthState {
    data: string[] | null
    user: string[] | null
    error: string[] | null
    loading: boolean
}

export interface UserProfileState {
    data: string[] | null
    error: string[] | null
    loading: boolean
}
