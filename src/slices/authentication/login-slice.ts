import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IGenericResponse, } from "../../types/authentication";

const initialState: IGenericResponse = {
    message: '',
    token: {
        accessToken: '',
        tokenType: '',
        expiresAt: '',
    },
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
            

        },
        isLoading: (state, action: PayloadAction<boolean>) => {

        },
        logout: () => initialState,
    },
});


export const { logout, login, setToken, isLoading } = loginSlice.actions;