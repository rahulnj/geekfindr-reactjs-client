import { CreatePostActionType, DeletePostActionType, EditPostActionType, GetFeedActionType, GetMyPostsActionType } from '../actiontypes';


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

//Action models for getting feed posts

interface GetFeedRequestAction {
    type: GetFeedActionType.GET_FEED_REQUEST
}

interface GetFeedSuccessAction {
    type: GetFeedActionType.GET_FEED_SUCCESS
    payload: string[]
}

interface GetFeedFailAction {
    type: GetFeedActionType.GET_FEED_FAIL
    payload: string[] | null
}

export type GetFeedAction =
    | GetFeedRequestAction
    | GetFeedSuccessAction
    | GetFeedFailAction

//Action models for getting my posts

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

//Action type for editing posts

interface EditPostRequestAction {
    type: EditPostActionType.EDIT_POST_REQUEST
}

interface EditPostSuccessAction {
    type: EditPostActionType.EDIT_POST_SUCCESS
    payload: string[]
}

interface EditPostFailAction {
    type: EditPostActionType.EDIT_POST_FAIL
    payload: string[] | null
}

export type EditPostAction =
    | EditPostRequestAction
    | EditPostSuccessAction
    | EditPostFailAction

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