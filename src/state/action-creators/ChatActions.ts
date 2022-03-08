import { Dispatch } from "redux"
import request from "../../api"
import { CreateConversationOrRoomAction, GetMyChatsAction } from "../action-models"
import { CreateConversationOrRoomActionType, GetMyChatsActionType } from "../actiontypes"

export const CreateConversationOrRoom = ({ token, conversationObj }: any) => {
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
            const { data } = await request.post('/api/v1/chats/conversations', conversationObj, config)
            dispatch({
                type: CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_SUCCESS,
                payload: data
            })


        } catch (error: any) {
            console.log(error);
            dispatch({
                type: CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_FAIL,
                payload: error
            })
        }
    }
}

export const GetMyChats = ({ token }: any) => {
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
            const { data } = await request.get('/api/v1/chats/my-conversations', config)
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