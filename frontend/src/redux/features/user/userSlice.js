import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
};

export const userSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.profile = action.payload;
    },
    logoutUser: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
