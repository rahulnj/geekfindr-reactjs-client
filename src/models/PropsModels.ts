export interface LayoutProps {
    children: JSX.Element[] | JSX.Element
    isModalOpened?: boolean
    project?: boolean
}

export interface SidebarProps {
    error?: boolean
    isSidebar?: boolean;
    project?: boolean;
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

export interface HomePostProps {
    setIsCommentModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    setCommentPostId: React.Dispatch<React.SetStateAction<string>>
    LikePostHandler: (id: string) => void
    CommentHandler: (id: string) => void
}

export interface SkeletonProps {
    type: string
    theme?: string
}

export interface FollowCounterSkeletonProps {
    theme: string
}

export interface HomePostSkeletonProps {
    theme: string
}