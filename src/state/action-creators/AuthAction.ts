import { Dispatch } from 'redux';
import { UserSigninActionType, UserSignupActionType } from '../actiontypes/UserActionTypes';
import { SigninAction, SignupAction } from '../action-models/UserActions';
import request from '../../api'

interface SignupData {
    username: string | number;
    email: string | number;
    password: string | number;
}

interface SigninData {
    email: string | number;
    password: string | number;
}



export const UserSignup = (signupData: SignupData) => {
    return async (dispatch: Dispatch<SignupAction>) => {
        dispatch({
            type: UserSignupActionType.USER_SIGNUP_REQUEST
        });
        try {
            const { data } = await request.post('/api/v1/users/signup/', signupData)
            const { avatar, email, id, username } = data
            console.log(username);

            dispatch({
                type: UserSignupActionType.USER_SIGNUP_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error.response.data.errors[0].message);
            dispatch({
                type: UserSignupActionType.USER_SIGNUP_FAIL,
                payload: error.response.data.errors[0].message
            })

        }
    }
}


export const UserSignin = (signinData: SigninData) => {
    return async (dispatch: Dispatch<SigninAction>) => {
        dispatch({
            type: UserSigninActionType.USER_SIGNIN_REQUEST
        });
        try {
            const { data } = await request.post('/api/v1/users/signin', signinData)
            console.log(data);
            localStorage.setItem('gfr-user', JSON.stringify(data))
            dispatch({
                type: UserSigninActionType.USER_SIGNIN_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error.response.data);
            dispatch({
                type: UserSigninActionType.USER_SIGNIN_FAIL,
                payload: error.response.data.errors[0].message
            })
        }
    }
}