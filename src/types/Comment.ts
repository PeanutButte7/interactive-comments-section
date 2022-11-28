import { User } from './User';

export type Comment = {
    id: string;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replyingTo?: string;
    replies?: Comment[];
};
