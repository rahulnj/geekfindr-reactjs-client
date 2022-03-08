import { Dispatch } from "redux"
import request from "../../api"
import { CreateConversationOrRoomAction } from "../action-models"
import { CreateConversationOrRoomActionType } from "../actiontypes"

export const CreateConversationOrRoom = ({ token, coversationObj }: any) => {
    return async (dispatch: Dispatch<CreateConversationOrRoomAction>) => {
        dispatch({
            type: CreateConversationOrRoomActionType.CREATE_CONVERSATION_OR_ROOM_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }, coversationObj
        };
        try {
            const { data } = await request.post('/api/v1/chats/conversations', config)
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