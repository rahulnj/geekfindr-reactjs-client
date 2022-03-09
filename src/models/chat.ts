export interface GetMyChatsData {
    id: string
    createdAt: string
    isRoom: boolean
    updatedAt: string
    participants: Participant[]
}

export interface CreateConversationOrRoomData {
    isRoom: boolean
    participants: string[]
    roomName: string
}



export interface Participant {
    avatar: string
    id: string
    username: string
}


export interface GetMyChatState {
    data: GetMyChatsData[] | string[]
    error: string[] | null
    loading: boolean
    success?: boolean
}
export interface GetConversationsState {
    data: Conversation[] | string[]
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


export interface Conversation {
    conversationId: string
    createdAt: string
    id: string
    message: string
    senderId: string
    updatedAt: string
}

