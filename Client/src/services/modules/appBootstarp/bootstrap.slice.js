import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

const appSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.user = action.payload.data;
    },
  },
});

export const { userData } = appSlice.actions;
export default appSlice.reducer;
