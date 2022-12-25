import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/Modal/modalSlice";
import userSlice from "../features/user/userSlice";

import userAlbumsSlice from "../features/UserAlbums/userAlbumsSlice";

import userIdSlice from "../features/userId/userIdSlice";
import userPostsSlice from "../features/userPosts/userPostsSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    userAlbums: userAlbumsSlice,
    userPosts: userPostsSlice,
    userId: userIdSlice,
    modal: modalSlice,
  },
});
