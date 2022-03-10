export interface SignupData {
    username: string;
    email: string;
    password: string;
}

export interface SigninData {
    email: string;
    password: string;
}

export interface UserAuthData {
    email: string
    avatar: string
    username: string
    createdAt: string
    updatedAt: string
    id: string
    token: string
}

export interface AuthState {
    data: UserAuthData | null
    user: UserAuthData | null
    error: string[] | null
    loading: boolean
}