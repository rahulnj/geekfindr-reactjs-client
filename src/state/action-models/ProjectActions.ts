//Action models for getting my projects

import {
    AddProjectDescriptionActionType,
    GetMyProjectActionType,
    GetProjectDetailsActionType,
    LeaveOrRemoveMembersActionType,
    ManageTeamRoleActionType,
    ProjectDeleteActionType,
    ProjectTaskActionType,
    ProjectTaskDeleteActionType,
    ProjectTaskIsCompleteActionType,
    ProjectTodoActionType
} from "../actiontypes";

interface GetMyrojectRequestAction {
    type: GetMyProjectActionType.GET_MYPROJECT_REQUEST
}

interface GetMyrojectSuccessAction {
    type: GetMyProjectActionType.GET_MYPROJECT_SUCCESS
    payload: string[]
}

interface GetMyrojectFailAction {
    type: GetMyProjectActionType.GET_MYPROJECT_FAIL
    payload: string[] | null
}

export type GetMyrojectAction =
    | GetMyrojectRequestAction
    | GetMyrojectSuccessAction
    | GetMyrojectFailAction

//Action models for getting project details

interface GetProjectDetailsRequestAction {
    type: GetProjectDetailsActionType.GET_PROJECT_DETAILS_REQUEST
}

interface GetProjectDetailsSuccessAction {
    type: GetProjectDetailsActionType.GET_PROJECT_DETAILS_SUCCESS
    payload: string[]
}

interface GetProjectDetailsFailAction {
    type: GetProjectDetailsActionType.GET_PROJECT_DETAILS_FAIL
    payload: string[] | null
}

export type GetProjectDetailsAction =
    | GetProjectDetailsRequestAction
    | GetProjectDetailsSuccessAction
    | GetProjectDetailsFailAction

//Action models for adding project Description

interface AddProjectDescriptionRequestAction {
    type: AddProjectDescriptionActionType.ADD_PROJECT_DESCRIPTION_REQUEST
}

interface AddProjectDescriptionSuccessAction {
    type: AddProjectDescriptionActionType.ADD_PROJECT_DESCRIPTION_SUCCESS
    payload: string[]
}

interface AddProjectDescriptionFailAction {
    type: AddProjectDescriptionActionType.ADD_PROJECT_DESCRIPTION_FAIL
    payload: string[] | null
}

export type AddProjectDescriptionAction =
    | AddProjectDescriptionRequestAction
    | AddProjectDescriptionSuccessAction
    | AddProjectDescriptionFailAction

//Action models for changing team members role

interface ManageTeamRoleRequestAction {
    type: ManageTeamRoleActionType.MANAGE_TEAM_ROLE_REQUEST
}

interface ManageTeamRoleSuccessAction {
    type: ManageTeamRoleActionType.MANAGE_TEAM_ROLE_SUCCESS
    payload: string[]
}

interface ManageTeamRoleFailAction {
    type: ManageTeamRoleActionType.MANAGE_TEAM_ROLE_FAIL
    payload: String[] | null
}

export type ManageTeamRoleAction =
    | ManageTeamRoleRequestAction
    | ManageTeamRoleSuccessAction
    | ManageTeamRoleFailAction

//Action models for removing or leaving from the project

interface LeaveOrRemoveMembersRequestAction {
    type: LeaveOrRemoveMembersActionType.LEAVE_OR_REMOVE_MEMBERS_REQUEST
}

interface LeaveOrRemoveMembersSuccessAction {
    type: LeaveOrRemoveMembersActionType.LEAVE_OR_REMOVE_MEMBERS_SUCCESS
    payload: string[]
}

interface LeaveOrRemoveMembersFailAction {
    type: LeaveOrRemoveMembersActionType.LEAVE_OR_REMOVE_MEMBERS_FAIL
    payload: string[] | null
}

export type LeaveOrRemoveMembersAction =
    | LeaveOrRemoveMembersRequestAction
    | LeaveOrRemoveMembersSuccessAction
    | LeaveOrRemoveMembersFailAction

//Action models for the project todo

interface ProjectTodoRequestAction {
    type: ProjectTodoActionType.PROJECT_TODO_REQUEST
}

interface ProjectTodoSuccessAction {
    type: ProjectTodoActionType.PROJECT_TODO_SUCCESS
    payload: string[]
}

interface ProjectTodoFailAction {
    type: ProjectTodoActionType.PROJECT_TODO_FAIL
    payload: string[] | null
}

export type ProjectTodoAction =
    | ProjectTodoRequestAction
    | ProjectTodoSuccessAction
    | ProjectTodoFailAction

//Action models for project task

interface ProjectTaskRequestAction {
    type: ProjectTaskActionType.PROJECT_TASK_REQUEST
}

interface ProjectTaskSuccessAction {
    type: ProjectTaskActionType.PROJECT_TASK_SUCCESS
    payload: string[]
}

interface ProjectTaskFailAction {
    type: ProjectTaskActionType.PROJECT_TASK_FAIL
    payload: string[]
}

export type ProjectTaskAction =
    | ProjectTaskRequestAction
    | ProjectTaskSuccessAction
    | ProjectTaskFailAction

//Action models for project task iscomplete

interface ProjectTaskIsCompleteRequestAction {
    type: ProjectTaskIsCompleteActionType.PROJECT_TASK_ISCOMPLETE_REQUEST
}

interface ProjectTaskIsCompleteSuccessAction {
    type: ProjectTaskIsCompleteActionType.PROJECT_TASK_ISCOMPLETE_SUCCESS
    payload: string[]
}

interface ProjectTaskIsCompleteFailAction {
    type: ProjectTaskIsCompleteActionType.PROJECT_TASK_ISCOMPLETE_FAIL
    payload: string[]
}

export type ProjectTaskIsCompleteAction =
    | ProjectTaskIsCompleteRequestAction
    | ProjectTaskIsCompleteSuccessAction
    | ProjectTaskIsCompleteFailAction

//action models to delete project task

interface ProjectTaskDeleteRequestAction {
    type: ProjectTaskDeleteActionType.PROJECT_TASK_DELETE_REQUEST
}

interface ProjectTaskDeleteSuccessAction {
    type: ProjectTaskDeleteActionType.PROJECT_TASK_DELETE_SUCCESS
    payload: string[]
}

interface ProjectTaskDeleteFailAction {
    type: ProjectTaskDeleteActionType.PROJECT_TASK_DELETE_FAIL
    payload: string[]
}

export type ProjectTaskDeleteAction =
    | ProjectTaskDeleteRequestAction
    | ProjectTaskDeleteSuccessAction
    | ProjectTaskDeleteFailAction

//action models for deleting the project

interface ProjectDeleteRequestAction {
    type: ProjectDeleteActionType.PROJECT_DELETE_REQUEST
}

interface ProjectDeleteSuccessAction {
    type: ProjectDeleteActionType.PROJECT_DELETE_SUCCESS
    payload: string[]
}

interface ProjectDeleteFailAction {
    type: ProjectDeleteActionType.PROJECT_DELETE_FAIL
    payload: string[]
}

export type ProjectDeleteAction =
    | ProjectDeleteRequestAction
    | ProjectDeleteSuccessAction
    | ProjectDeleteFailAction