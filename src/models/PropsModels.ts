import { Todo } from ".";

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
    commentPostImg: string
}

export interface HomePostProps {
    setIsCommentModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    setCommentPostId: React.Dispatch<React.SetStateAction<string>>
    CommentHandler: (id: string, mediaURL: string) => void
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

export interface SidbarProjectSkeletonProps {
    theme: string
}

export interface ProjectDescriptionModalProps {
    setIsProjectDescriptionModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ProjectTodoDragandDropProps {
    noStatus: Todo[]
    nextUp: Todo[]
    inProgress: Todo[]
    completed: Todo[]
}

export interface ProfileRightAsideProps {
    userProfile?: boolean
    profile?: boolean
}

export interface ProjectTaskModalProps {
    setIsProjectTaskModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ProjectTaskManageModalProps {
    setIsProjectTaskManageModal: React.Dispatch<React.SetStateAction<boolean>>
    projectTaskIndex: number
}