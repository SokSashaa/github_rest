import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ItemRepType} from "../../api/api";


const initialState: ItemRepType[] = []

//slice который хранит в себе итемы репозиториев
export const repsSlice = createSlice({
    name: 'reps',
    initialState,
    reducers: {
        addItems: (state, action: PayloadAction<ItemRepType[]>) => {
            state.splice(0, state.length)
            state.push(...action.payload)
        },
        clearState: (state) => {
            return initialState
        },

    },
})


export const {addItems, clearState,} = repsSlice.actions


export default repsSlice.reducer