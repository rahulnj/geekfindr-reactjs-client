import { PostState } from "../../models"
import { CreatePostAction, GetMyPostAction } from "../action-models"
import { CreatePostActionType, GetMyPostsActionType } from "../actiontypes";



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