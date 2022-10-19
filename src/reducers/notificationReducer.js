import { createSlice } from "@reduxjs/toolkit";

const initialState = null;
const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    set(state, action) {
      const content = action.payload;
      state = `You voted for ${content}`;
      return state;
    },
    remove(state, action) {
      state = null;
      return state;
    },
  },
});

export const setNotification = (content, timeoutSec) => {
  return async (dispatch) => {
    dispatch(remove());

    dispatch(set(content));
    setTimeout(() => {
      dispatch(remove());
    }, timeoutSec * 1000);
  };
};

export const { set, remove } = notificationSlice.actions;
export default notificationSlice.reducer;
