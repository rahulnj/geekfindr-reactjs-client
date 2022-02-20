import { Dispatch } from "redux";
import request from "../../api";
import { UserData } from "../../models";
import { GetMyrojectAction, GetProjectDetailsAction } from "../action-models/ProjectAction";
import { GetMyProjectActionType, GetProjectDetailsActionType } from "../actiontypes/ProjectActionType";




export const GetMyProject = ({ token }: any) => {
    return async (dispatch: Dispatch<GetMyrojectAction>) => {
        dispatch({
            type: GetMyProjectActionType.GET_MYPROJECT_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get('/api/v1/projects/my-projects', config)
            dispatch({
                type: GetMyProjectActionType.GET_MYPROJECT_SUCCESS,
                payload: data
            })
            // console.log(data);

        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetMyProjectActionType.GET_MYPROJECT_FAIL,
                payload: error
            })
        }
    }
}

export const GetProjectDetails = ({ token, projectId }: any) => {

    return async (dispatch: Dispatch<GetProjectDetailsAction>) => {
        dispatch({
            type: GetProjectDetailsActionType.GET_PROJECT_DETAILS_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.get(`/api/v1/projects/${projectId}`, config)
            dispatch({
                type: GetProjectDetailsActionType.GET_PROJECT_DETAILS_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetProjectDetailsActionType.GET_PROJECT_DETAILS_FAIL,
                payload: error
            })
        }
    }
}