//Action models for getting my projects

import { AddProjectDescriptionActionType, GetMyProjectActionType, GetProjectDetailsActionType } from "../actiontypes/ProjectActionType";

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