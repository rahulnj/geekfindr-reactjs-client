export interface AuthState {
    data: string[] | null
    user: string[] | null
    error: string[] | null
    loading: boolean
}

export interface UserProfileState {
    data: string[]
    error: string[] | null
    loading: boolean
    success?: boolean
}
