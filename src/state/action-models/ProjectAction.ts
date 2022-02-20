//Action models for getting my projects

import { GetMyProjectActionType } from "../actiontypes/ProjectActionType";

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