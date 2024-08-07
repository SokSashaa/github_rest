import {configureStore} from "@reduxjs/toolkit";
import RepsSlice from "./slices/repsSlice";

//стор, который хранит в себе все slice
export const store = configureStore({
    reducer: {
        reps: RepsSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch