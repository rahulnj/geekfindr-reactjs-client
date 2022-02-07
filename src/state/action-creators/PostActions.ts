import { Dispatch } from "redux"
import request from "../../api"

import { CreatePostAction } from "../action-models"
import { CreatePostActionType } from "../actiontypes"

export const CreatePost = ({ token, postData, navigate, setIsModalOpened }: any) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        dispatch({
            type: CreatePostActionType.CREATE_POST_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.post('/api/v1/posts/', postData, config)
            console.log(data);

            dispatch({
                type: CreatePostActionType.CREATE_POST_SUCCESS,
                payload: data
            })
            setIsModalOpened(false)
            navigate('/')
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: CreatePostActionType.CREATE_POST_FAIL,
                payload: error
            })

        }
    }
}