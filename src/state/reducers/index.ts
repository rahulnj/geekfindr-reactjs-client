import { combineReducers } from "redux";

import { UserSigninAuthReducer, UserRegisterAuthReducer } from "./AuthReducer";
import { CreatePostReducer, DeletePostReducer, EditPostReducer, GetMyPostReducer } from "./PostReducer";
import { UserEditProfileDetailsReducer, UserProfileDetailsReducer } from "./UserReducer";

const rootReducer = combineReducers({
    UserSignup: UserRegisterAuthReducer,
    UserSignin: UserSigninAuthReducer,
    UserProfileDetails: UserProfileDetailsReducer,
    UserEditProfileDetails: UserEditProfileDetailsReducer,
    CreatePost: CreatePostReducer,
    GetMyPost: GetMyPostReducer,
    EditPost: EditPostReducer,
    DeletePost: DeletePostReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>