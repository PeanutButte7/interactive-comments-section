import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface CommentsState {
    comments: Comment[];
}

const initialState: CommentsState = {
    comments: [
        {
            id: '1',
            content:
                "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            createdAt: '1 month ago',
            score: 12,
            user: {
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                username: 'amyrobson',
            },
            replies: [],
        },
        {
            id: '2',
            content:
                "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            createdAt: '2 weeks ago',
            score: 5,
            user: {
                image: 'https://randomuser.me/api/portraits/women/44.jpg',
                username: 'maxblagun',
            },
            replies: [
                {
                    id: '3',
                    content:
                        "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                    createdAt: '1 week ago',
                    score: 4,
                    replyingTo: 'maxblagun',
                    user: {
                        image: 'https://randomuser.me/api/portraits/men/22.jpg',
                        username: 'ramsesmiron',
                    },
                },
                {
                    id: '4',
                    content:
                        "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                    createdAt: '2 days ago',
                    score: 2,
                    replyingTo: 'ramsesmiron',
                    user: {
                        image: 'https://randomuser.me/api/portraits/women/33.jpg',
                        username: 'juliusomo',
                    },
                },
            ],
        },
    ],
};

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        add: (
            state,
            action: PayloadAction<{ content: string; replyingToId?: string }>
        ) => {
            state.comments.push({
                id: uuidv4(),
                content: action.payload.content,
                createdAt: '1 month ago',
                score: 0,
                user: {
                    username: 'juliusomo',
                    image: 'https://randomuser.me/api/portraits/women/33.jpg',
                },
                replyingTo: action.payload.replyingToId,
            });
        },
        remove: (state, action: PayloadAction<string>) => {
            const foundComment = getCommentById(state, action.payload);

            if (foundComment.replyId !== -1) {
                state.comments[foundComment.commentId].replies?.splice(
                    foundComment.replyId,
                    1
                );
            } else {
                state.comments.splice(foundComment.commentId, 1);
            }
        },
        edit: (
            state,
            action: PayloadAction<{ id: string; content: string }>
        ) => {
            const foundComment = getCommentById(state, action.payload.id);

            if (foundComment.replyId !== -1) {
                // @ts-ignore
                state.comments[foundComment.commentId].replies[
                    foundComment.replyId
                ].content = action.payload.content;
            } else {
                state.comments[foundComment.commentId].content =
                    action.payload.content;
            }
        },
    },
});

function getCommentById(state: CommentsState, id: string) {
    let isFound = false;
    let replyId = -1;

    const commentId = state.comments.findIndex((comment) => {
        if (comment.id === id) {
            isFound = true;
        } else if (comment.replies && comment.replies.length > 0) {
            replyId = comment.replies.findIndex((reply) => {
                isFound = reply.id === id;
                return reply.id === id;
            });
        }

        return isFound;
    });

    return {
        replyId,
        commentId,
    };
}

// Action creators are generated for each case reducer function
export const { add, remove, edit } = commentsSlice.actions;

export default commentsSlice.reducer;
