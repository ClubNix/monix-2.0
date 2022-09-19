import { configureStore } from "@reduxjs/toolkit";
import user from "./Model/UserSlice";
import application from "./Model/ApplicationSlice";


export const store = configureStore({
  reducer: {
    user,
    application
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
