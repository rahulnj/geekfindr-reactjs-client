import { CreateConversationOrRoomActionType } from "../actiontypes";

//Action model for creating a conversation or a room

interface CreateConversationOrRoomRequestAction {
    type: CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_REQUEST
}

interface CreateConversationOrRoomSuccessAction {
    type: CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_SUCCESS
    payload: string[]
}

interface CreateConversationOrRoomFailAction {
    type: CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_FAIL
    payload: string[]
}

export type CreateConversationOrRoomAction =
    | CreateConversationOrRoomRequestAction
    | CreateConversationOrRoomSuccessAction
    | CreateConversationOrRoomFailAction