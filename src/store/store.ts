import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './commentsSlice';
import currentUserReducer from './currentUserSlice';

export const store = configureStore({
    reducer: {
        comments: commentsReducer,
        currentUser: currentUserReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
