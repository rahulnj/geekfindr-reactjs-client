//Action models for getting my projects

import { AddProjectDescriptionActionType, GetMyProjectActionType, GetProjectDetailsActionType, LeaveOrRemoveMembersActionType, ManageTeamRoleActionType, ProjectTodoActionType } from "../actiontypes/ProjectActionType";

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






