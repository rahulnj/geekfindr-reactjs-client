export interface Children {
    children: JSX.Element[] | JSX.Element
}

export interface Handle {
    sidebar?: boolean;
    handleToggleSidebar: (boolean?: boolean) => void;
}

export interface Profile {
    profile?: boolean;
}

export interface data {
    loading: boolean;
    error: string[] | null;
    data: string[] | null
}

export interface usersData {
    avatar: string
    email: string
    id: string
    token: string
    username: string
}
