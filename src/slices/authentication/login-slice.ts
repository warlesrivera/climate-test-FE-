import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IUser } from "../../types";
import { IGenericResponse, } from "../../types/authentication";

const initialState: IGenericResponse = {
    message: '',
    token: {
        accessToken: '',
        tokenType: '',
        expiresAt: '',
    },
    user: {
        id: '',
        name: '',
        email: '',
    }
};
export const loginSlice = createSlice({
    initialState,
    name: 'loginSlice',
    reducers: {
        login: (state, action: PayloadAction<IGenericResponse>) => {
            state.token = action.payload.token;
        },
        setToken: (state, action: PayloadAction<IGenericResponse>) => {
            state.message = action.payload.message;
            state.token = action.payload.token;
            state.user = action.payload.user;

        },
        logoutUser: (state) => {
            state.message = '';
            state.token = {
                accessToken: '',
                tokenType: '',
                expiresAt: '',
            };
            state.user = {
                id: '',
                name: '',
                email: '',
            };
        },

    },
});

export const selectToken = (state: RootState): string => state.loginUser.token.accessToken;
export const selectUser = (state: RootState): IUser => state.loginUser.user;

export const { logoutUser, login, setToken } = loginSlice.actions;