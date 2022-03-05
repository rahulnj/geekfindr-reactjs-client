import { ProjectState } from "../../models"
import { AddProjectDescriptionAction, GetMyrojectAction, GetProjectDetailsAction, LeaveOrRemoveMembersAction, ManageTeamRoleAction, ProjectTaskAction, ProjectTodoAction } from "../action-models/ProjectAction"
import { AddProjectDescriptionActionType, GetMyProjectActionType, GetProjectDetailsActionType, LeaveOrRemoveMembersActionType, ManageTeamRoleActionType, ProjectTaskActionType, ProjectTodoActionType } from "../actiontypes/ProjectActionType"

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
            return { ...state, success: false, loading: true, error: null, data: [] }
        case GetProjectDetailsActionType.GET_PROJECT_DETAILS_SUCCESS:
            return { ...state, success: true, loading: false, error: null, data: action.payload }
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

export const ManageTeamRoleReducer = (
    state: ProjectState = initialState,
    action: ManageTeamRoleAction
): ProjectState => {
    switch (action.type) {
        case ManageTeamRoleActionType.MANAGE_TEAM_ROLE_REQUEST:
            return { ...state, success: false, loading: true, error: null, data: [] }
        case ManageTeamRoleActionType.MANAGE_TEAM_ROLE_SUCCESS:
            return { ...state, success: true, loading: false, error: null, data: action.payload }
        case ManageTeamRoleActionType.MANAGE_TEAM_ROLE_FAIL:
            return { ...state, success: false, loading: false, error: null, data: [] }
        default:
            return state;
    }
}

export const LeaveOrRemoveMembersReducer = (
    state: ProjectState = initialState,
    action: LeaveOrRemoveMembersAction
): ProjectState => {
    switch (action.type) {
        case LeaveOrRemoveMembersActionType.LEAVE_OR_REMOVE_MEMBERS_REQUEST:
            return { ...state, success: false, loading: true, error: null, data: [] }
        case LeaveOrRemoveMembersActionType.LEAVE_OR_REMOVE_MEMBERS_SUCCESS:
            return { ...state, success: true, loading: false, error: null, data: action.payload }
        case LeaveOrRemoveMembersActionType.LEAVE_OR_REMOVE_MEMBERS_FAIL:
            return { ...state, success: false, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const ProjectTodoReducer = (
    state: ProjectState = initialState,
    action: ProjectTodoAction
): ProjectState => {
    switch (action.type) {
        case ProjectTodoActionType.PROJECT_TODO_REQUEST:
            return { ...state, success: false, loading: true, error: null, data: [] }
        case ProjectTodoActionType.PROJECT_TODO_SUCCESS:
            return { ...state, success: true, loading: false, error: null, data: action.payload }
        case ProjectTodoActionType.PROJECT_TODO_FAIL:
            return { ...state, success: false, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export const ProjectTaskReducer = (
    state: ProjectState = initialState,
    action: ProjectTaskAction
): ProjectState => {
    switch (action.type) {
        case ProjectTaskActionType.PROJECT_TASK_REQUEST:
            return { ...state, success: false, loading: true, error: null, data: [] }
        case ProjectTaskActionType.PROJECT_TASK_SUCCESS:
            return { ...state, success: true, loading: false, error: null, data: action.payload }
        case ProjectTaskActionType.PROJECT_TASK_FAIL:
            return { ...state, success: false, loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}