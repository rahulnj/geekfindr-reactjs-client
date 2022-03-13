import {
    Conversation,
    CreateConversationOrRoomData,
    GetMyChatsData
} from "../../models";

import {
    AddMembersToRoomActionType,
    CreateConversationOrRoomActionType,
    GetConversationsActionType,
    GetMyChatsActionType
} from "../actiontypes";

//Action model for creating a conversation or a room

interface CreateConversationOrRoomRequestAction {
    type: CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_REQUEST
}

interface CreateConversationOrRoomSuccessAction {
    type: CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_SUCCESS
    payload: CreateConversationOrRoomData
}

interface CreateConversationOrRoomFailAction {
    type: CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_FAIL
    payload: string[]
}

export type CreateConversationOrRoomAction =
    | CreateConversationOrRoomRequestAction
    | CreateConversationOrRoomSuccessAction
    | CreateConversationOrRoomFailAction

//Action models for getting currentuser conversations.

interface GetMyChatsRequestAction {
    type: GetMyChatsActionType.GET_MY_CHATS_REQUEST
}

interface GetMyChatsSuccessAction {
    type: GetMyChatsActionType.GET_MY_CHATS_SUCCESS
    payload: GetMyChatsData[]
}

interface GetMyChatsFailAction {
    type: GetMyChatsActionType.GET_MY_CHATS_FAIL
    payload: string[]
}

export type GetMyChatsAction =
    | GetMyChatsRequestAction
    | GetMyChatsSuccessAction
    | GetMyChatsFailAction

//Action models for getting the conversations

interface GetConversationsRequestAction {
    type: GetConversationsActionType.GET_CONVERSATIONS_REQUEST
}

interface GetConversationsSuccessAction {
    type: GetConversationsActionType.GET_CONVERSATIONS_SUCCESS
    payload: Conversation[]
}

interface GetConversationsFailAction {
    type: GetConversationsActionType.GET_CONVERSATIONS_FAIL
    payload: string[]
}

export type GetConversationsAction =
    | GetConversationsRequestAction
    | GetConversationsSuccessAction
    | GetConversationsFailAction

//Action models for adding members to the room

interface AddMembersToRoomRequestAction {
    type: AddMembersToRoomActionType.ADD_MEMBERS_TO_ROOM_REQUEST
}

interface AddMembersToRoomSuccessAction {
    type: AddMembersToRoomActionType.ADD_MEMBERS_TO_ROOM_SUCCESS
    payload: string[]
}

interface AddMembersToRoomFailAction {
    type: AddMembersToRoomActionType.ADD_MEMBERS_TO_ROOM_FAIL
    payload: string[]
}

export type AddMembersToRoomAction =
    | AddMembersToRoomRequestAction
    | AddMembersToRoomSuccessAction
    | AddMembersToRoomFailAction