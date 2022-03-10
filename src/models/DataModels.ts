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












export interface profileinfo {
    followers: string
    following: string
}

//Poststate Models used in the state



export interface Todo {
    id: number
    todo: string
}