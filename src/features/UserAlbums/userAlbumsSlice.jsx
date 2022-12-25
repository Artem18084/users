import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  userAlbums: [],
};
const api_url = "https://jsonplaceholder.typicode.com/albums";
export const getUserAlbums = createAsyncThunk(
  "userAlbums/getUserAlbums",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(api_url);
    dispatch(setUserAlbums(res.data));
  }
);
export const userAlbumsSlice = createSlice({
  name: "userAlbums",
  initialState,
  reducers: {
    setUserAlbums: (state, action) => {
      state.userAlbums = action.payload;
    },
  },

  extraReducers: {
    [getUserAlbums.pending]: () => console.log("pending"),
    [getUserAlbums.fulfilled]: () => console.log("fulfilled"),
    [getUserAlbums.rejected]: () => console.log("rejected"),
  },
});

export const { setUserAlbums } = userAlbumsSlice.actions;
export default userAlbumsSlice.reducer;
