//Data models for the Authstate

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

export interface UserProfileDetailsData {
    email: string
    username: string
    avatar: string
    bio: string
    organizations: string[]
    followersCount: number
    followingCount: number
    experience: string
    education: string[]
    works: string[]
    skills: string[]
    socials: string[]
    role: string
    createdAt: string
    updatedAt: string
    id: string
}


export interface UserData {
    avatar: string
    createdAt: string
    email: string
    experience: string[]
    followers: string[]
    following: string[]
    id: string
    organizations: string[]
    skills: string[]
    socials: string[]
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
















export interface AddPostModal {
    ToggleAddPostModal: (boolean?: boolean) => void;
    handleToggleSidebar: (boolean?: boolean) => void;
}



export interface AddPostModalState {
    isModalOpened: boolean
    setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>

}

export interface EditPostModalState {
    isEditModalOpened: boolean
    setIsEditModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}






export interface FollowersModal {
    followersModal?: boolean
    followingModal?: boolean
    username?: string
    role?: string
    userId?: string
    avatar?: string
}





export interface profileinfo {
    followers: string
    following: string
}

//Poststate Models used in the state

export interface PostData {
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
    isJoined?: boolean
    likes?: string[]
    ref?: any
}

export interface Todo {
    id: number
    todo: string
}