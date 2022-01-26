export interface Children {
    children: JSX.Element[] | JSX.Element
}

export interface Handle {
    error?: boolean
    sidebar?: boolean;
    handleToggleSidebar: (boolean?: boolean) => void;
}

export interface Profile {
    profile?: boolean;
}



export interface usersData {
    avatar: string
    email: string
    id: string
    token: string
    username: string
}
