export interface SidebarProps {
    error?: boolean
    isSidebar?: boolean;
    handleToggleSidebar: (boolean?: boolean) => void;
}

export interface ProfileProps {
    profile?: boolean;
    userProfile?: boolean;
}

export interface PostUploadModalProps {
    isModalOpened: boolean
    setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    isEditModalOpened: boolean
    setIsEditModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export interface CommentProps {
    commentPostId: string
}