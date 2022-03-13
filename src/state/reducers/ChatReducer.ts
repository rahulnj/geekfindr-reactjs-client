import { GetConversationsState, GetMyChatState, CreateConversationOrRoomState, AddMembersToRoomState } from "../../models"
import { AddMembersToRoomAction, CreateConversationOrRoomAction, GetConversationsAction, GetMyChatsAction } from "../action-models"
import { AddMembersToRoomActionType, CreateConversationOrRoomActionType, GetConversationsActionType, GetMyChatsActionType } from "../actiontypes";

const initialState = {
    data: [],
    error: null,
    loading: false,
    success: false
}



export const CreateConversationOrRoomReducer = (
    state: CreateConversationOrRoomState = initialState,
    action: CreateConversationOrRoomAction
): CreateConversationOrRoomState => {
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
    state: GetMyChatState = initialState,
    action: GetMyChatsAction
): GetMyChatState => {
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

export const GetConversationsReducer = (
    state: GetConversationsState = initialState,
    action: GetConversationsAction
): GetConversationsState => {
    switch (action.type) {
        case GetConversationsActionType.GET_CONVERSATIONS_REQUEST:
            return { ...state, loading: true, success: false, error: null, data: [] }
        case GetConversationsActionType.GET_CONVERSATIONS_SUCCESS:
            return { ...state, loading: false, success: true, error: null, data: action.payload }
        case GetConversationsActionType.GET_CONVERSATIONS_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const AddMembersToRoomReducer = (
    state: AddMembersToRoomState = initialState,
    action: AddMembersToRoomAction
): AddMembersToRoomState => {
    switch (action.type) {
        case AddMembersToRoomActionType.ADD_MEMBERS_TO_ROOM_REQUEST:
            return { ...state, loading: true, success: false, error: null, data: [] }
        case AddMembersToRoomActionType.ADD_MEMBERS_TO_ROOM_SUCCESS:
            return { ...state, loading: false, success: true, error: null, data: action.payload }
        case AddMembersToRoomActionType.ADD_MEMBERS_TO_ROOM_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}