import { GetMyChatsData } from "./chat"

export interface ModalProps {
    isModalOpened: boolean
    setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    isEditModalOpened: boolean
    setIsEditModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    followersModal: boolean
    setFollowersModal: React.Dispatch<React.SetStateAction<boolean>>
    followingModal: boolean
    setFollowingModal: React.Dispatch<React.SetStateAction<boolean>>
    isCommentModalOpened: boolean
    setIsCommentModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    commentPostId: string
    commentPostImg: string
    isProjectDescriptionModal: boolean
    setIsProjectDescriptionModal: React.Dispatch<React.SetStateAction<boolean>>
    isProjectTaskModal: boolean
    setIsProjectTaskModal: React.Dispatch<React.SetStateAction<boolean>>
    isProjectTaskManageModal: boolean
    setIsProjectTaskManageModal: React.Dispatch<React.SetStateAction<boolean>>
    projectTaskIndex: any
    isChatModal: boolean
    setIsChatModal: React.Dispatch<React.SetStateAction<boolean>>
    isRoomModal: boolean
    setIsRoomModal: React.Dispatch<React.SetStateAction<boolean>>
    chatUser: GetMyChatsData | undefined
}