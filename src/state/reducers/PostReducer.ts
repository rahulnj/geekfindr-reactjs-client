import { PostState } from "../../models"
import { CreatePostAction, DeletePostAction, EditPostAction, GetFeedAction, GetMyPostAction, PostCommentsAction, PostLikesAction } from "../action-models"
import { CreatePostActionType, DeletePostActionType, EditPostActionType, GetFeedActionType, GetMyPostsActionType, PostCommentsActionType, PostLikesActionType } from "../actiontypes";



const initialState = {
    data: [],
    error: null,
    loading: false,
    success: false
}

export const CreatePostReducer = (
    state: PostState = initialState,
    action: CreatePostAction
): PostState => {
    switch (action.type) {
        case CreatePostActionType.CREATE_POST_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case CreatePostActionType.CREATE_POST_SUCCESS:
            return { ...state, success: true, error: null, data: action.payload }
        case CreatePostActionType.CREATE_POST_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const GetFeedReducer = (
    state: PostState = initialState,
    action: GetFeedAction
): PostState => {
    switch (action.type) {
        case GetFeedActionType.GET_FEED_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case GetFeedActionType.GET_FEED_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case GetFeedActionType.GET_FEED_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const GetMyPostReducer = (
    state: PostState = initialState,
    action: GetMyPostAction
): PostState => {
    switch (action.type) {
        case GetMyPostsActionType.GET_MYPOST_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case GetMyPostsActionType.GET_MYPOST_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case GetMyPostsActionType.GET_MYPOST_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const EditPostReducer = (
    state: PostState = initialState,
    action: EditPostAction
): PostState => {
    switch (action.type) {
        case EditPostActionType.EDIT_POST_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case EditPostActionType.EDIT_POST_SUCCESS:
            return { ...state, success: true, error: null, data: action.payload }
        case EditPostActionType.EDIT_POST_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const DeletePostReducer = (
    state: PostState = initialState,
    action: DeletePostAction
): PostState => {
    switch (action.type) {
        case DeletePostActionType.DELETE_POST_REQUEST:
            return { ...state, loading: true, error: null }
        case DeletePostActionType.DELETE_POST_SUCCESS:
            return { ...state, success: true, error: null, data: action.payload }
        case DeletePostActionType.DELETE_POST_FAIL:
            return { ...state, loading: false, success: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const GetLikesReducer = (
    state: PostState = initialState,
    action: PostLikesAction
): PostState => {
    switch (action.type) {
        case PostLikesActionType.GET_LIKES_REQUEST:
            return { ...state, loading: true, error: null }
        case PostLikesActionType.GET_LIKES_SUCCESS:
            return { ...state, success: true, error: null, data: action.payload }
        case PostLikesActionType.GET_LIKES_FAIL:
            return { ...state, loading: false, success: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const GetCommentsReducer = (
    state: PostState = initialState,
    action: PostCommentsAction
): PostState => {
    switch (action.type) {
        case PostCommentsActionType.GET_COMMENTS_REQUEST:
            return { ...state, loading: true, error: null }
        case PostCommentsActionType.GET_COMMENTS_SUCCESS:
            return { ...state, success: true, error: null, data: action.payload }
        case PostCommentsActionType.GET_COMMENTS_FAIL:
            return { ...state, loading: false, success: false, error: action.payload, data: [] }
        default:
            return state;
    }
}