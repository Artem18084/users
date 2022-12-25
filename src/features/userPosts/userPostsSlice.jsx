import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userPosts: [],
};

const api_url = "https://jsonplaceholder.typicode.com/posts";

export const getUserPosts = createAsyncThunk(
  "userPosts/getUserPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(api_url);
    dispatch(setUserPosts(res.data));
  }
);

export const userPostsSlice = createSlice({
  name: "userPosts",
  initialState,
  reducers: {
    setUserPosts: (state, action) => {
      state.userPosts = action.payload;
    },
  },
  extraReducers: {
    [getUserPosts.pending]: () => console.log("pending"),
    [getUserPosts.fulfilled]: () => console.log("fulfilled"),
    [getUserPosts.rejected]: () => console.log("rejected"),
  },
});

export const { setUserPosts } = userPostsSlice.actions;
export default userPostsSlice.reducer;
