import { CreatePostState } from "../../models"
import { CreatePostAction } from "../action-models"
import { CreatePostActionType } from "../actiontypes";



const initialState = {
    data: [],
    error: null,
    loading: false,
    success: false
}

export const CreatePostReducer = (
    state: CreatePostState = initialState,
    action: CreatePostAction
): CreatePostState => {
    {
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
}