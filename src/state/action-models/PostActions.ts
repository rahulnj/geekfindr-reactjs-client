import {
    CreatePostActionType,
    DeletePostActionType,
    EditPostActionType,
    GetFeedActionType,
    GetMyPostsActionType,
    GetPostCommentsActionType,
    GetPostLikesActionType,
    GetUsersPostsActionType,
    PostCommentActionType,
    PostLikeActionType
} from '../actiontypes';


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


//Action models for getting likes of a post

interface GetPostLikesRequestAction {
    type: GetPostLikesActionType.GET_LIKES_REQUEST
}

interface GetPostLikesSuccessAction {
    type: GetPostLikesActionType.GET_LIKES_SUCCESS
    payload: string[]
}

interface GetPostLikesFailAction {
    type: GetPostLikesActionType.GET_LIKES_FAIL
    payload: string[] | null
}

export type GetPostLikesAction =
    | GetPostLikesRequestAction
    | GetPostLikesSuccessAction
    | GetPostLikesFailAction


//Action models for getting comments of a post

interface GetPostCommentsRequestAction {
    type: GetPostCommentsActionType.GET_COMMENTS_REQUEST
}

interface GetPostCommentsSuccessAction {
    type: GetPostCommentsActionType.GET_COMMENTS_SUCCESS
    payload: string[]
}

interface GetPostCommentsFailAction {
    type: GetPostCommentsActionType.GET_COMMENTS_FAIL
    payload: string[] | null
}

export type GetPostCommentsAction =
    | GetPostCommentsRequestAction
    | GetPostCommentsSuccessAction
    | GetPostCommentsFailAction

//Action models for liking a post

interface PostLikeRequestAction {
    type: PostLikeActionType.POST_LIKE_REQUEST
}

interface PostLikeSuccessAction {
    type: PostLikeActionType.POST_LIKE_SUCCESS
    payload: string[]
}

interface PostLikeFailAction {
    type: PostLikeActionType.POST_LIKE_FAIL
    payload: string[] | null
}

export type PostLikeAction =
    | PostLikeRequestAction
    | PostLikeSuccessAction
    | PostLikeFailAction

//Action models for commenting a post

interface PostCommentRequestAction {
    type: PostCommentActionType.POST_COMMENT_REQUEST
}

interface PostCommentSuccessAction {
    type: PostCommentActionType.POST_COMMENT_SUCCESS
    payload: string[]
}

interface PostCommentFailAction {
    type: PostCommentActionType.POST_COMMENT_FAIL
    payload: string[] | null
}

export type PostCommentAction =
    | PostCommentRequestAction
    | PostCommentSuccessAction
    | PostCommentFailAction

//Action models for getting user's post

interface GetUsersPostsRequestAction {
    type: GetUsersPostsActionType.GET_USERSPOST_REQUEST
}

interface GetUsersPostsSuccessAction {
    type: GetUsersPostsActionType.GET_USERSPOST_SUCCESS
    payload: string[]
}

interface GetUsersPostsFailAction {
    type: GetUsersPostsActionType.GET_USERSPOST_FAIL
    payload: string[] | null
}

export type GetUsersPostsAction =
    | GetUsersPostsRequestAction
    | GetUsersPostsSuccessAction
    | GetUsersPostsFailAction