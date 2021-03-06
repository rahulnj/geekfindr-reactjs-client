import { Owner } from "./post"

export interface ProjectState {
    data: string[]
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface GetMyProjectState {
    data: GetMyProjectData[] | []
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface GetProjectDetailState {
    data: ProjectDetails
    error: string[] | null
    loading: boolean
    success?: boolean
}

export interface GetMyProjectActionData {
    token: string
}

export interface GetProjectDetailsActionData {
    token: string
    projectId: string | undefined
}

export interface AddProjectDescriptionActionData {
    token: string
    description: string
    projectId: string | undefined
}

export interface ManageTeamRoleActionData {
    projectId: string | undefined
    memberId: string
    role: string
    token: string
}

export interface LeaveOrRemoveMembersActionData {
    projectId: string | undefined
    memberId: string
    token: string
}

export interface ProjectTodoActionData {
    projectId: string | undefined
    token: string
    Todo: any
}

export interface ProjectTaskActionData {
    token: string
    projectId: string | undefined
    task: any
}

export interface ProjectTaskIsCompleteActionData {
    token: string
    projectId: string | undefined
    title: string
    isComplete: {
        isComplete: boolean
    }
}

export interface ProjectTaskDeleteActionData {
    token: string
    projectId: string | undefined
    title: string
}

export interface DeleteProjectActionData {
    token: string
    projectId: string | undefined
}

export interface GetMyProjectData {
    project: {
        description: string
        id: string
        name: string
    }
    owner: Owner
    role: string
}

export type role = 'owner' | 'admin' | 'collaborator' | 'joinRequest';
export type title = 'noStatus' | 'nextUp' | 'inProgress' | 'completed';

export interface ProjectDetails {
    project: {
        createdAt: string
        description: string
        id: string
        name: string
        owner: Owner
        task: Task[]
        team: Team[]
        todo: Todo[]
        updatedAt: string
    }
    role: role
    isOwner?: boolean
    isAdmin?: boolean
    isCollaborator?: boolean
    isjoinRequest?: boolean
}

export interface Task {
    assignor: Owner
    description: string
    isComplete: boolean
    title: string
    type: string
    users: string[]
}


export interface Team {
    role: role
    user: Owner
}

export interface Todo {
    tasks: string[]
    title: title
}

export interface SingleTodo {
    id: string
    todo: string
}

export interface Options {
    username: string
    id: string
}

