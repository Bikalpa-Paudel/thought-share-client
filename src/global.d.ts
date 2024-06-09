export interface post {
    _id: string;
    title: string;
    content: string;
    votes: number;
    comments: any[];
    user: {
        username: string;
        email: string;
    };
    createdAt: string;
    updatedAt: string;

}

