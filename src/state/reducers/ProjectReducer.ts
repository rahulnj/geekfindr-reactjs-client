import { ProjectState } from "../../models"
import { GetMyrojectAction } from "../action-models/ProjectAction"
import { GetMyProjectActionType } from "../actiontypes/ProjectActionType"

const initialState = {
    data: [],
    error: null,
    loading: false,
    success: false
}

export const GetMyProjectReducer = (
    state: ProjectState = initialState,
    action: GetMyrojectAction
): ProjectState => {
    switch (action.type) {
        case GetMyProjectActionType.GET_MYPROJECT_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case GetMyProjectActionType.GET_MYPROJECT_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case GetMyProjectActionType.GET_MYPROJECT_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}