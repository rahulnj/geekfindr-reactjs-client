//Action models for getting my projects

import { GetMyProjectActionType, GetProjectDetailsActionType } from "../actiontypes/ProjectActionType";

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