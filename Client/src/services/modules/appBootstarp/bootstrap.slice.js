import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

const appSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    userData: (state, action) => {
      console.log(action.payload)
      state.user = action.payload;
    },
  },
});

export const { userData } = appSlice.actions;
export default appSlice.reducer;
