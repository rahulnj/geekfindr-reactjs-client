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



export interface profileData {
    avatar: string
    createdAt: string
    email: string
    experience: string[]
    followers: string[]
    following: string[]
    id: string
    organization: string[]
    skills: string[]
    socials: string[]
    works: string[]
    userId: string
    username: string
    token: string
}

export interface profileinfo {
    followers: string
    following: string
}