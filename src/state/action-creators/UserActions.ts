import { Dispatch } from "redux"

import request from "../../api"


import { UserProfileDetailsAction } from "../action-models"
import { UserProfileDetailsActionType } from "../actiontypes"

export const UserProfileDetails = ({ token }: any) => {

    return async (dispatch: Dispatch<UserProfileDetailsAction>) => {
        dispatch({
            type: UserProfileDetailsActionType.USER_PROFILE_DETAILS_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get('/api/v1/profiles/my-profile', config)
            dispatch({
                type: UserProfileDetailsActionType.USER_PROFILE_DETAILS_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: UserProfileDetailsActionType.USER_PROFILE_DETAILS_FAIL,
                payload: error
            })
        }
    }
}