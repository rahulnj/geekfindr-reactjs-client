import { Dispatch } from "redux"
import request from "../../api"
import { PostDataState } from "../../models"

import { CreatePostAction, DeletePostAction, EditPostAction, GetFeedAction, GetMyPostAction } from "../action-models"
import { CreatePostActionType, DeletePostActionType, EditPostActionType, GetFeedActionType, GetMyPostsActionType } from "../actiontypes"

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

export const GetFeedPosts = ({ token, limit, lastPostId }: any) => {
    return async (dispatch: Dispatch<GetFeedAction>) => {
        dispatch({
            type: GetFeedActionType.GET_FEED_REQUEST
        })
        try {
            const { data } = await request.get('/api/v1/posts/my-feed', {
                params: {
                    limit: limit,
                    lastId: lastPostId
                },
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(data);
            dispatch({
                type: GetFeedActionType.GET_FEED_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetFeedActionType.GET_FEED_FAIL,
                payload: error
            })
        }
    }
}









export const GetMyPost = ({ token }: any) => {
    return async (dispatch: Dispatch<GetMyPostAction>) => {
        dispatch({
            type: GetMyPostsActionType.GET_MYPOST_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get('/api/v1/posts/my-posts', config)
            console.log(data);

            dispatch({
                type: GetMyPostsActionType.GET_MYPOST_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetMyPostsActionType.GET_MYPOST_FAIL,
                payload: error
            })
        }
    }
}

export const EditPost = ({ token, EditedPostData, postId, navigate, setIsEditModalOpened, userId }: any) => {
    return async (dispatch: Dispatch<EditPostAction>) => {
        dispatch({
            type: EditPostActionType.EDIT_POST_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            console.log(postId);
            const { data } = await request.patch(`/api/v1/posts/${postId}`, EditedPostData, config)
            console.log(data);
            dispatch({
                type: EditPostActionType.EDIT_POST_SUCCESS,
                payload: data
            })
            setIsEditModalOpened(false)
            navigate(`/profile/${userId}`)
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: EditPostActionType.EDIT_POST_FAIL,
                payload: error
            })
        }
    }
}

export const DeletePost = ({ postId, token, navigate, userId }: any) => {
    return async (dispatch: Dispatch<DeletePostAction>) => {
        dispatch({
            type: DeletePostActionType.DELETE_POST_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.delete(`/api/v1/posts/${postId}`, config)
            navigate(`/profile/${userId}`)
            dispatch({
                type: DeletePostActionType.DELETE_POST_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: DeletePostActionType.DELETE_POST_FAIL,
                payload: error
            })
        }
    }
}