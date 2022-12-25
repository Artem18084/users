import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
};
const api_url = "https://jsonplaceholder.typicode.com/users";
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(api_url);
    dispatch(setUsers(res.data));
  }
);
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },

  extraReducers: {
    [getUsers.pending]: () => console.log("pending"),
    [getUsers.fulfilled]: () => console.log("fulfilled"),
    [getUsers.rejected]: () => console.log("rejected"),
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
