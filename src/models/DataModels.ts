//Data models for the Authstate










export interface SearchedUserData {
    username: string
    role: string
    id: string
    avatar: string
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
    isRequested?: boolean
    isJoined?: boolean
    likes?: string[]
    ref?: any
}

export interface Todo {
    id: number
    todo: string
}