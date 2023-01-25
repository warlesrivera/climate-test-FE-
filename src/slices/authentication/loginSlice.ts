import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToken } from "../../types/authentication";

const initialState: IToken = {
    accessToken: '',
    tokenType: '',
    expiresAt: ''
};
export const loginSlice = createSlice({
    initialState,
    name: 'loginSlice',
    reducers: {
        login: (state, action: PayloadAction<IToken>) => {
            state = action.payload;
        },
        logout: () => initialState,
        setToken: (state, action: PayloadAction<IToken>) => {
            state = action.payload;

        }
    },
});

export const { logout, login, setToken } = loginSlice.actions;