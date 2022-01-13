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

