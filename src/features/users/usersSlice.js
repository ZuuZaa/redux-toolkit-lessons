import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1, name: 'Orxan Cabbarov'},
    {id:2, name: 'Sabina Sahilova'},
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {}
})


export const getAllUsers = state => state.users;

export default usersSlice.reducer;
