import { Dispatch } from "redux"
import request from "../../api"
import {
    AddMembersToRoomActionData,
    Conversation,
    CreateConversationOrRoomActionData,
    CreateConversationOrRoomData,
    GetConversationsActionData,
    GetMyChatsActionData,
    GetMyChatsData
} from "../../models"

import {
    AddMembersToRoomAction,
    CreateConversationOrRoomAction,
    GetConversationsAction,
    GetMyChatsAction
} from "../action-models"

import {
    AddMembersToRoomActionType,
    CreateConversationOrRoomActionType,
    GetConversationsActionType,
    GetMyChatsActionType
} from "../actiontypes"


export const CreateConversationOrRoom = ({ token, conversationObj }: CreateConversationOrRoomActionData) => {
    return async (dispatch: Dispatch<CreateConversationOrRoomAction>) => {
        dispatch({
            type: CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.post<CreateConversationOrRoomData>('/api/v1/chats/conversations', conversationObj, config)
            dispatch({
                type: CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_SUCCESS,
                payload: data
            })
            console.log(data);


        } catch (error: any) {
            console.log(error);
            dispatch({
                type: CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_FAIL,
                payload: error
            })
        }
    }
}

export const GetMyChats = ({ token }: GetMyChatsActionData) => {
    return async (dispatch: Dispatch<GetMyChatsAction>) => {
        dispatch({
            type: GetMyChatsActionType.GET_MY_CHATS_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get<GetMyChatsData[]>('/api/v1/chats/my-conversations', config)
            dispatch({
                type: GetMyChatsActionType.GET_MY_CHATS_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetMyChatsActionType.GET_MY_CHATS_FAIL,
                payload: error
            })
        }
    }
}

export const GetConversations = ({ token, conversationId }: GetConversationsActionData) => {
    return async (dispatch: Dispatch<GetConversationsAction>) => {
        dispatch({
            type: GetConversationsActionType.GET_CONVERSATIONS_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get<Conversation[]>(`/api/v1/chats/conversations/${conversationId}/messages`, config)
            dispatch({
                type: GetConversationsActionType.GET_CONVERSATIONS_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetConversationsActionType.GET_CONVERSATIONS_FAIL,
                payload: error
            })
        }
    }
}

export const AddMembersToRoom = ({ token, memberId, conversationId }: AddMembersToRoomActionData) => {
    return async (dispatch: Dispatch<AddMembersToRoomAction>) => {
        dispatch({
            type: AddMembersToRoomActionType.ADD_MEMBERS_TO_ROOM_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.patch(`/api/v1/chats/api/v1/chats/conversations/${conversationId}/participants`,
                { memberId: memberId }, config)
            dispatch({
                type: AddMembersToRoomActionType.ADD_MEMBERS_TO_ROOM_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: AddMembersToRoomActionType.ADD_MEMBERS_TO_ROOM_FAIL,
                payload: error
            })
        }
    }
}