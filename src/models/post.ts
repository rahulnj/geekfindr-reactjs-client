export interface PostState {
    data: PostData[] | []
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface DeletePostState {
    data: string[] | []
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface GetLikesState {
    data: string[] | []
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface LikePostState {
    data: {}
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface CommentPostState {
    data: {}
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface GetCommentPostState {
    data: PostComment[] | []
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface GetUsersPostState {
    data: PostData[] | []
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface TeamJoinRequestState {
    data: {}
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface UploadPostData {
    mediaType: string
    isProject: boolean
    mediaURL: string,
    description: string,
    isOrganization: boolean
    projectName?: string
}

export interface EditedPostDataActionData {
    EditedPostData: {
        description: string
    }
    userId: string
    token: string
    postId: string | undefined
    navigate: any
}

export interface DeletePostActionData {
    postId: string
    token: string
    navigate: any
    userId: string
}

export interface GetPostLikesActionData {
    token: string
    postId: string
}


export interface CreatePostActionData {
    postData: UploadPostData
    navigate: any
    token: string
}

export interface GetFeedPostsActionData {
    token: string
    limit: string
    lastId: string
}

export interface GetMyPostActionData {
    token: string
}

export interface CommentPostActionData {
    token: string
    postId: string
    comment: string
}

export interface GetUsersPostsActionData {
    token: string
    userId: string | undefined
}

export interface TeamJoinActionData {
    projectId: string
    token: string
}

export interface PostData {
    comments: string[]
    createdAt?: string
    description: string
    id: string
    isOrganization?: boolean
    isProject: boolean
    likeCount: number
    commentCount: number
    mediaType?: string
    mediaURL: string
    owner?: Owner
    teamJoinRequests?: string[]
    teamJoinRequestCount?: number
    updatedAt?: string
    isLiked?: boolean
    isRequested?: boolean
    isJoined?: boolean
    likes?: string[]
    ref?: any
}

export interface Owner {
    avatar: string
    id: string
    username: string
}

export interface PostComment {
    comment: string
    owner: Owner
}