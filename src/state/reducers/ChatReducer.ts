import { ChatState } from "../../models"
import { CreateConversationOrRoomAction, GetMyChatsAction } from "../action-models"
import { CreateConversationOrRoomActionType, GetMyChatsActionType } from "../actiontypes";

const initialState = {
    data: [],
    error: null,
    loading: false,
    success: false
}



export const CreateConversationOrRoomReducer = (
    state: ChatState = initialState,
    action: CreateConversationOrRoomAction
): ChatState => {
    switch (action.type) {
        case CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_REQUEST:
            return { ...state, loading: true, success: false, error: null, data: [] }
        case CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_SUCCESS:
            return { ...state, loading: false, success: true, error: null, data: action.payload }
        case CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const GetMyChatsReducer = (
    state: ChatState = initialState,
    action: GetMyChatsAction
): ChatState => {
    switch (action.type) {
        case GetMyChatsActionType.GET_MY_CHATS_REQUEST:
            return { ...state, loading: true, success: false, error: null, data: [] }
        case GetMyChatsActionType.GET_MY_CHATS_SUCCESS:
            return { ...state, loading: false, success: true, error: null, data: action.payload }
        case GetMyChatsActionType.GET_MY_CHATS_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}