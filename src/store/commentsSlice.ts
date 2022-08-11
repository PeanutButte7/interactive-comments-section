import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Comment} from '../types';

interface CommentsState {
    comments: Comment[];
}

const initialState: CommentsState = {
    comments: [
        {
            id: 1,
            "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            "createdAt": "1 month ago",
            "score": 12,
            "user": {
                "image": "https://randomuser.me/api/portraits/men/32.jpg",
                "username": "amyrobson"
            },
            "replies": []
        },
        {
            "id": 2,
            "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            "createdAt": "2 weeks ago",
            "score": 5,
            "user": {
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "username": "maxblagun"
            },
            "replies": [
                {
                    "id": 3,
                    "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                    "createdAt": "1 week ago",
                    "score": 4,
                    "replyingTo": "maxblagun",
                    "user": {
                        "image": "https://randomuser.me/api/portraits/men/22.jpg",
                        "username": "ramsesmiron"
                    }
                },
                {
                    "id": 4,
                    "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                    "createdAt": "2 days ago",
                    "score": 2,
                    "replyingTo": "ramsesmiron",
                    "user": {
                        "image": "https://randomuser.me/api/portraits/women/33.jpg",
                        "username": "juliusomo"
                    }
                },
            ]
        }
    ]
};

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.comments.push({
                id: state.comments.length + 1,
                content: action.payload,
                createdAt: '1 month ago',
                score: 0,
                user: {
                    username: 'juliusomo',
                    image: 'https://randomuser.me/api/portraits/women/33.jpg',
                }
            });
        },
        remove: (state, action: PayloadAction<number>) => {
            let isFound = false;
            let replyId;
            let isReply = false;

            const commentId = state.comments.findIndex(comment => {
                if (comment.id === action.payload) {
                    isFound = true;
                } else if (comment.replies) {
                    replyId = comment.replies.findIndex(reply => {
                        isFound = reply.id === action.payload;
                        isReply = reply.id === action.payload;
                    });
                }

                return isFound;
            })

            if (isReply) {
                // @ts-ignore
                state.comments[commentId].replies.splice(commentId, commentId)
            } else {
                state.comments.splice(commentId, commentId)
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { add, remove } = commentsSlice.actions

export default commentsSlice.reducer