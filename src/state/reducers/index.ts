import { combineReducers } from "redux";

import {
    UserSigninAuthReducer,
    UserRegisterAuthReducer
} from "./AuthReducer";

import {
    CreatePostReducer,
    DeletePostReducer,
    EditPostReducer,
    GetCommentsReducer,
    GetFeedReducer,
    GetLikesReducer,
    GetMyPostReducer,
} from "./PostReducer";

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
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>