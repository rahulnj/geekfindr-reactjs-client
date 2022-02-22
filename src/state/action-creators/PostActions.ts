import { Dispatch } from "redux"

import request from "../../api"
import { UserData } from "../../models";

import {
    CreatePostAction, DeletePostAction, EditPostAction,
    GetFeedAction, GetMyPostAction, GetPostCommentsAction,
    GetPostLikesAction, GetUsersPostsAction, PostCommentAction, PostLikeAction, TeamJoinAction
} from "../action-models"

import {
    CreatePostActionType, DeletePostActionType, EditPostActionType,
    GetFeedActionType, GetMyPostsActionType, GetPostCommentsActionType,
    GetPostLikesActionType, GetUsersPostsActionType, PostCommentActionType, PostLikeActionType, TeamJoinActionType
} from "../actiontypes"




export const CreatePost = ({ postData, navigate, setIsModalOpened, token }: any) => {
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

export const GetFeedPosts = ({ token, limit, lastId }: any) => {
    return async (dispatch: Dispatch<GetFeedAction>) => {
        dispatch({
            type: GetFeedActionType.GET_FEED_REQUEST
        })
        try {
            const { data } = await request.get('/api/v1/posts/my-feed', {
                params: {
                    limit: limit,
                    lastId
                },
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
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

export const EditPost = ({ EditedPostData, postId, navigate, setIsEditModalOpened, token, userId }: any) => {
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
            const { data } = await request.patch(`/api/v1/posts/${postId}`, EditedPostData, config)
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

export const GetPostLikes = ({ token, postId }: any) => {
    return async (dispatch: Dispatch<GetPostLikesAction>) => {
        dispatch({
            type: GetPostLikesActionType.GET_LIKES_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get(`/api/v1/posts/${postId}/likes`, config)
            dispatch({
                type: GetPostLikesActionType.GET_LIKES_SUCCESS,
                payload: data
            })
            console.log(data, "likes");

        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetPostLikesActionType.GET_LIKES_FAIL,
                payload: error
            })
        }
    }
}

export const GetPostComments = ({ token, postId }: any) => {
    return async (dispatch: Dispatch<GetPostCommentsAction>) => {
        dispatch({
            type: GetPostCommentsActionType.GET_COMMENTS_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get(`/api/v1/posts/${postId}/comments`, config)
            dispatch({
                type: GetPostCommentsActionType.GET_COMMENTS_SUCCESS,
                payload: data
            })
            console.log(data, "comments");

        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetPostCommentsActionType.GET_COMMENTS_FAIL,
                payload: error
            })
        }
    }
}

export const LikePost = ({ token, postId }: any) => {
    return async (dispatch: Dispatch<PostLikeAction>) => {
        dispatch({
            type: PostLikeActionType.POST_LIKE_REQUEST,
        });
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.post(`/api/v1/posts/${postId}/likes`, {}, config)
            dispatch({
                type: PostLikeActionType.POST_LIKE_SUCCESS,
                payload: data
            })
            console.log(data, "liked response");

        } catch (error: any) {
            console.log(error);
            dispatch({
                type: PostLikeActionType.POST_LIKE_FAIL,
                payload: error
            })
        }
    }
}

export const CommentPost = ({ token, postId, comment }: any) => {
    return async (dispatch: Dispatch<PostCommentAction>) => {
        dispatch({
            type: PostCommentActionType.POST_COMMENT_REQUEST,
        });
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.post(`/api/v1/posts/${postId}/comments`, {
                comment: comment
            }, config);
            dispatch({
                type: PostCommentActionType.POST_COMMENT_SUCCESS,
                payload: data
            })
            console.log(data, "Comment response");
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: PostCommentActionType.POST_COMMENT_FAIL,
                payload: error
            })
        }
    }
}

export const GetUsersPosts = ({ token, userId }: any) => {
    return async (dispatch: Dispatch<GetUsersPostsAction>) => {
        dispatch({
            type: GetUsersPostsActionType.GET_USERSPOST_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get(`/api/v1/posts/by-users/${userId}`, config)
            dispatch({
                type: GetUsersPostsActionType.GET_USERSPOST_SUCCESS,
                payload: data
            });
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetUsersPostsActionType.GET_USERSPOST_FAIL,
                payload: error
            });
        }
    }
}

export const TeamJoinRequest = ({ token, userId }: any) => {
    return async (dispatch: Dispatch<TeamJoinAction>) => {
        dispatch({
            type: TeamJoinActionType.TEAM_JOIN_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        console.log(userId);

        try {
            const { data } = await request.post(`/api/v1/posts/${userId}/team-join-requests`, {}, config)
            dispatch({
                type: TeamJoinActionType.TEAM_JOIN_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: TeamJoinActionType.TEAM_JOIN_FAIL,
                payload: error
            })
        }
    }
}