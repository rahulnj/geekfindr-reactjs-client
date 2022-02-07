import { CreatePostActionType } from '../actiontypes';


interface CreatePostRequestAction {
    type: CreatePostActionType.CREATE_POST_REQUEST
}

interface CreatePostSuccessAction {
    type: CreatePostActionType.CREATE_POST_SUCCESS
    payload: []
}

interface CreatePostFailAction {
    type: CreatePostActionType.CREATE_POST_FAIL
    payload: string[] | null
}

export type CreatePostAction =
    | CreatePostRequestAction
    | CreatePostSuccessAction
    | CreatePostFailAction