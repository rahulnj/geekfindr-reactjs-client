import { Dispatch } from "redux";
import request from "../../api";
import { AddProjectDescriptionActionData, DeleteProjectActionData, GetMyProjectActionData, GetMyProjectData, GetProjectDetailsActionData, LeaveOrRemoveMembersActionData, ManageTeamRoleActionData, ProjectDetails, ProjectTaskActionData, ProjectTaskDeleteActionData, ProjectTaskIsCompleteActionData, ProjectTodoActionData } from "../../models";

import {
    AddProjectDescriptionAction,
    GetMyrojectAction,
    GetProjectDetailsAction,
    LeaveOrRemoveMembersAction,
    ManageTeamRoleAction,
    ProjectDeleteAction,
    ProjectTaskAction,
    ProjectTaskDeleteAction,
    ProjectTaskIsCompleteAction,
    ProjectTodoAction
} from "../action-models";

import {
    AddProjectDescriptionActionType,
    GetMyProjectActionType,
    GetProjectDetailsActionType,
    LeaveOrRemoveMembersActionType,
    ManageTeamRoleActionType,
    ProjectDeleteActionType,
    ProjectTaskActionType,
    ProjectTaskDeleteActionType,
    ProjectTaskIsCompleteActionType,
    ProjectTodoActionType
} from "../actiontypes";

export const GetMyProject = ({ token }: GetMyProjectActionData) => {
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
            const { data } = await request.get<GetMyProjectData[]>('/api/v1/projects/my-projects', config)
            dispatch({
                type: GetMyProjectActionType.GET_MYPROJECT_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: GetMyProjectActionType.GET_MYPROJECT_FAIL,
                payload: error
            })
        }
    }
}

export const GetProjectDetails = ({ token, projectId }: GetProjectDetailsActionData) => {
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
            const { data } = await request.get<ProjectDetails>(`/api/v1/projects/${projectId}`, config)
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

export const AddProjectDescription = ({ token, description, projectId }: AddProjectDescriptionActionData) => {
    return async (dispatch: Dispatch<AddProjectDescriptionAction>) => {
        dispatch({
            type: AddProjectDescriptionActionType.ADD_PROJECT_DESCRIPTION_REQUEST
        });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.put(`/api/v1/projects/${projectId}/description`,
                {
                    description: description
                }, config)
            dispatch({
                type: AddProjectDescriptionActionType.ADD_PROJECT_DESCRIPTION_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: AddProjectDescriptionActionType.ADD_PROJECT_DESCRIPTION_FAIL,
                payload: error
            })
        }
    }
}

export const ManageTeamRole = ({ projectId, memberId, role, token }: ManageTeamRoleActionData) => {
    return async (dispatch: Dispatch<ManageTeamRoleAction>) => {
        dispatch({
            type: ManageTeamRoleActionType.MANAGE_TEAM_ROLE_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.put(`/api/v1/projects/${projectId}/team/${memberId}/role`, { role: role },
                config)
            dispatch({
                type: ManageTeamRoleActionType.MANAGE_TEAM_ROLE_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: ManageTeamRoleActionType.MANAGE_TEAM_ROLE_FAIL,
                payload: error
            })

        }
    }
}

export const LeaveOrRemoveMembers = ({ projectId, memberId, token }: LeaveOrRemoveMembersActionData) => {
    return async (dispatch: Dispatch<LeaveOrRemoveMembersAction>) => {
        dispatch({
            type: LeaveOrRemoveMembersActionType.LEAVE_OR_REMOVE_MEMBERS_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.delete(`/api/v1/projects/${projectId}/team/${memberId}`, config)
            dispatch({
                type: LeaveOrRemoveMembersActionType.LEAVE_OR_REMOVE_MEMBERS_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: LeaveOrRemoveMembersActionType.LEAVE_OR_REMOVE_MEMBERS_FAIL,
                payload: error
            })

        }
    }
}

export const ProjectTodo = ({ projectId, token, Todo }: ProjectTodoActionData) => {
    return async (dispatch: Dispatch<ProjectTodoAction>) => {
        dispatch({
            type: ProjectTodoActionType.PROJECT_TODO_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await request.put(`/api/v1/projects/${projectId}/todo`, Todo, config);
            dispatch({
                type: ProjectTodoActionType.PROJECT_TODO_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: ProjectTodoActionType.PROJECT_TODO_FAIL,
                payload: error
            })
        }
    }
}

export const ProjectTask = ({ token, projectId, task }: ProjectTaskActionData) => {
    return async (dispatch: Dispatch<ProjectTaskAction>) => {
        dispatch({
            type: ProjectTaskActionType.PROJECT_TASK_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        };
        try {
            const { data } = await request.post(`/api/v1/projects/${projectId}/tasks`, task, config)
            dispatch({
                type: ProjectTaskActionType.PROJECT_TASK_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: ProjectTaskActionType.PROJECT_TASK_FAIL,
                payload: error
            })
        }
    }
}

export const ProjectTaskIsComplete = ({ token, projectId, title, isComplete }: ProjectTaskIsCompleteActionData) => {
    return async (dispatch: Dispatch<ProjectTaskIsCompleteAction>) => {
        dispatch({
            type: ProjectTaskIsCompleteActionType.PROJECT_TASK_ISCOMPLETE_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        };
        try {
            const { data } = await request.put(`/api/v1/projects/${projectId}/tasks/${title}/completion-status`, isComplete, config)
            dispatch({
                type: ProjectTaskIsCompleteActionType.PROJECT_TASK_ISCOMPLETE_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: ProjectTaskIsCompleteActionType.PROJECT_TASK_ISCOMPLETE_FAIL,
                payload: error
            })
        }
    }
}

export const ProjectTaskDelete = ({ token, projectId, title }: ProjectTaskDeleteActionData) => {
    return async (dispatch: Dispatch<ProjectTaskDeleteAction>) => {
        dispatch({
            type: ProjectTaskDeleteActionType.PROJECT_TASK_DELETE_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        };
        try {
            const { data } = await request.delete(`/api/v1/projects/${projectId}/tasks/${title}`, config)
            dispatch({
                type: ProjectTaskDeleteActionType.PROJECT_TASK_DELETE_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: ProjectTaskDeleteActionType.PROJECT_TASK_DELETE_FAIL,
                payload: error
            })
        }
    }
}

export const DeleteProject = ({ token, projectId }: DeleteProjectActionData) => {
    return async (dispatch: Dispatch<ProjectDeleteAction>) => {
        dispatch({
            type: ProjectDeleteActionType.PROJECT_DELETE_REQUEST
        })
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        };
        try {
            const { data } = await request.delete(`/api/v1/projects/${projectId}`, config)
            dispatch({
                type: ProjectDeleteActionType.PROJECT_DELETE_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: ProjectDeleteActionType.PROJECT_DELETE_FAIL,
                payload: error
            })
        }
    }
}