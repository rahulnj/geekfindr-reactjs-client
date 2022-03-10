export interface CreateConversationOrRoomData {
    isRoom: boolean
    participants: string[]
    roomName: string
}

export interface GetMyChatsData {
    id: string
    createdAt: string
    isRoom: boolean
    roomName: string
    updatedAt: string
    participants: Participant[]
    reciever?: Participant[]
}

export interface Participant {
    avatar: string
    id: string
    username: string
}

export interface Conversation {
    conversationId?: string
    createdAt?: string
    id?: string
    message: string
    senderId: string
    updatedAt: string
    arrivalMsg?: boolean
}

export interface SocketResponseMessage {
    message: string
    time: string
    userId: string
}

export interface GetMyChatState {
    data: GetMyChatsData[] | []
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface GetConversationsState {
    data: Conversation[] | []
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface CreateConversationOrRoomState {
    data: CreateConversationOrRoomData | {}
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface ChatUsersListProps {
    socket: any
    setconversationId: React.Dispatch<React.SetStateAction<string>>
}

export interface ChatMessageProps {
    socket: any
    conversationId: string
}

export interface ChatHeaderProps {
    chatUser: GetMyChatsData | undefined
}

export interface ChatItemProps {
    updatedConversations: Conversation[]
    scrollRef: any
    conversationId: string
}

export interface ChatFooterProps {
    socket: any
}

export interface CreateConversationOrRoomActionData {
    token: string
    conversationObj: conversationObj
}


export interface conversationObj {
    isRoom: boolean
    roomName: string
    participants: string[]
}