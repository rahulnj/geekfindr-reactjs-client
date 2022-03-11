export interface UsersState {
    data: UserData | null
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface UserData {
    avatar: string
    createdAt: string
    updatedAt: string
    email: string
    experience: string[]
    education: string[]
    followers: string[]
    following: string[]
    id: string
    bio: string
    organizations: string[]
    skills: string[]
    socials: [{ github: string }, { linkedin: string }]
    works: string[]
    userId: string
    username: string
    token: string
    role?: string
    owner?: string
    likes?: {
        owner: string
        id: string
    }
}


export interface editProfileData {
    role: string
    bio: string
    organizations: string[]
    skills: string[]
    experience: string
    education: string[]
    works: string[]
    socials: [{ github: string }, { linkedin: string }]
}

export interface UserEditProfileDetailsActionData {
    token: string
    editProfileData: editProfileData
}

export interface GetUserDetailsActionData {
    token: string
    userId: string | undefined
}