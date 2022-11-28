import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentUserState {
    username: string;
    image: string;
}

const initialState: CurrentUserState = {
    username: 'juliusomo',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
};

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {},
});

export default currentUserSlice.reducer;
