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
    TeamJoinRequestReducer,
} from "./PostReducer";
import {
    AddProjectDescriptionReducer,
    GetMyProjectReducer,
    GetProjectDetailsReducer,
    LeaveOrRemoveMembersReducer,
    ManageTeamRoleReducer
} from "./ProjectReducer";

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
    TeamJoinRequest: TeamJoinRequestReducer,
    GetProjectDetails: GetProjectDetailsReducer,
    AddProjectDescription: AddProjectDescriptionReducer,
    ManageTeamRole: ManageTeamRoleReducer,
    LeaveOrRemoveMembers: LeaveOrRemoveMembersReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>