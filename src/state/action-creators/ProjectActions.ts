import { Dispatch } from "redux";
import request from "../../api";
import { UserData } from "../../models";
import { GetMyrojectAction } from "../action-models/ProjectAction";
import { GetMyProjectActionType } from "../actiontypes/ProjectActionType";




const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);




export const GetMyProject = () => {
    return async (dispatch: Dispatch<GetMyrojectAction>) => {
        dispatch({
            type: GetMyProjectActionType.GET_MYPROJECT_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${CurrentUser?.token}`,
            },
        };
        try {
            const { data } = await request.get('/api/v1/projects/my-projects', config)
            dispatch({
                type: GetMyProjectActionType.GET_MYPROJECT_SUCCESS,
                payload: data
            })
            console.log(data);

        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetMyProjectActionType.GET_MYPROJECT_FAIL,
                payload: error
            })
        }
    }
}
