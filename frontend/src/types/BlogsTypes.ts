export interface Blog {
    createdAt: number;
    content: string;
    title: string;
    id: number;
    author: {
        name: string;
    };
}


export interface User {
    name: string;
    description?: string;
    blog: Blog[];
}

export interface UserBlogsState {
    user: User;
}