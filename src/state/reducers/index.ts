import { combineReducers } from "redux";

import {
    UserSigninAuthReducer,
    UserRegisterAuthReducer
} from "./AuthReducer";

import {
    FollowUserReducer,
    GetFollowingUsersReducer,
    GetUserFollowersReducer
} from "./FollowersReducer";

import {
    CreatePostReducer,
    DeletePostReducer,
    EditPostReducer,
    GetCommentsReducer,
    GetFeedReducer,
    GetLikesReducer,
    GetMyPostReducer,
    GetUsersPostsReducer,
    PostCommentReducer,
    PostLikeReducer,
} from "./PostReducer";
import { GetMyProjectReducer } from "./ProjectReducer";

import {
    GetUserDetailsReducer,
    UserEditProfileDetailsReducer,
    UserProfileDetailsReducer
} from "./UserReducer";

const rootReducer = combineReducers({
    UserSignup: UserRegisterAuthReducer,
    UserSignin: UserSigninAuthReducer,
    UserProfileDetails: UserProfileDetailsReducer,
    UserEditProfileDetails: UserEditProfileDetailsReducer,
    CreatePost: CreatePostReducer,
    GetMyPost: GetMyPostReducer,
    EditPost: EditPostReducer,
    DeletePost: DeletePostReducer,
    GetUserDetails: GetUserDetailsReducer,
    GetMyFeed: GetFeedReducer,
    GetPostLikes: GetLikesReducer,
    GetPostComments: GetCommentsReducer,
    LikePost: PostLikeReducer,
    CommentPost: PostCommentReducer,
    GetUserFollowers: GetUserFollowersReducer,
    GetFollowingUsers: GetFollowingUsersReducer,
    GetUsersPosts: GetUsersPostsReducer,
    FollowUser: FollowUserReducer,
    GetMyProject: GetMyProjectReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>