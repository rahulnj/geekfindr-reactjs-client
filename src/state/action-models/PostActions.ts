import { CreatePostActionType, DeletePostActionType, GetMyPostsActionType } from '../actiontypes';


//Action models for createpost

interface CreatePostRequestAction {
    type: CreatePostActionType.CREATE_POST_REQUEST
}

interface CreatePostSuccessAction {
    type: CreatePostActionType.CREATE_POST_SUCCESS
    payload: string[]
}

interface CreatePostFailAction {
    type: CreatePostActionType.CREATE_POST_FAIL
    payload: string[] | null
}

export type CreatePostAction =
    | CreatePostRequestAction
    | CreatePostSuccessAction
    | CreatePostFailAction

//Action models for getting myposts

interface GetMyPostRequestAction {
    type: GetMyPostsActionType.GET_MYPOST_REQUEST
}

interface GetMyPostSuccessAction {
    type: GetMyPostsActionType.GET_MYPOST_SUCCESS
    payload: string[]
}

interface GetMyPostFailAction {
    type: GetMyPostsActionType.GET_MYPOST_FAIL
    payload: string[] | null
}

export type GetMyPostAction =
    | GetMyPostRequestAction
    | GetMyPostSuccessAction
    | GetMyPostFailAction

//Action models for deleting posts

interface DeletePostRequestAction {
    type: DeletePostActionType.DELETE_POST_REQUEST
}

interface DeletePostSuccessAction {
    type: DeletePostActionType.DELETE_POST_SUCCESS
    payload: string[]
}

interface DeletePostFailAction {
    type: DeletePostActionType.DELETE_POST_FAIL
    payload: string[] | null
}

export type DeletePostAction =
    | DeletePostRequestAction
    | DeletePostSuccessAction
    | DeletePostFailAction