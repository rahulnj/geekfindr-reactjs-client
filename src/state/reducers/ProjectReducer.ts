import { ProjectState } from "../../models"
import { AddProjectDescriptionAction, GetMyrojectAction, GetProjectDetailsAction } from "../action-models/ProjectAction"
import { AddProjectDescriptionActionType, GetMyProjectActionType, GetProjectDetailsActionType } from "../actiontypes/ProjectActionType"

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

export const GetProjectDetailsReducer = (
    state: ProjectState = initialState,
    action: GetProjectDetailsAction
): ProjectState => {
    switch (action.type) {
        case GetProjectDetailsActionType.GET_PROJECT_DETAILS_REQUEST:
            return { ...state, loading: true, error: null, data: [] }
        case GetProjectDetailsActionType.GET_PROJECT_DETAILS_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case GetProjectDetailsActionType.GET_PROJECT_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const AddProjectDescriptionReducer = (
    state: ProjectState = initialState,
    action: AddProjectDescriptionAction
): ProjectState => {
    switch (action.type) {
        case AddProjectDescriptionActionType.ADD_PROJECT_DESCRIPTION_REQUEST:
            return { ...state, success: false, loading: true, error: null, data: [] }
        case AddProjectDescriptionActionType.ADD_PROJECT_DESCRIPTION_SUCCESS:
            return { ...state, success: true, loading: false, error: null, data: action.payload }
        case AddProjectDescriptionActionType.ADD_PROJECT_DESCRIPTION_FAIL:
            return { ...state, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}