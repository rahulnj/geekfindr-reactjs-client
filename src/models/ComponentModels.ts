export interface Children {
    children: JSX.Element[] | JSX.Element
    isModalOpened?: boolean
}


export interface Handle {
    error?: boolean
    isSidebar?: boolean;
    handleToggleSidebar: (boolean?: boolean) => void;
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

export interface ModalState {
    isModalOpened: boolean
    setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    isEditModalOpened: boolean
    setIsEditModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}


export interface Profile {
    profile?: boolean;
    userProfile?: boolean;
}

export interface FollowersModal {
    followersModal?: boolean
    followingModal?: boolean
    username?: string
    role?: string
    userId?: string
    avatar?: string
}



export interface profileData {
    avatar: string
    createdAt: string
    email: string
    experience: string[]
    followers: string[]
    following: string[]
    id: string
    organization: string[]
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

export interface profileinfo {
    followers: string
    following: string
}