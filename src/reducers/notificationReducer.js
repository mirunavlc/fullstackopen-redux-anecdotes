import { createSlice } from "@reduxjs/toolkit";

const initialState = null;
const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      const content = action.payload;
      state = `You voted for ${content}`;
      return state;
    },
    removeNotification(state, action) {
      state = null;
      return state;
    },
  },
});

export const { setNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
