import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer, { setAnecdotes } from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import anecdotesService from "./services/anecdotes";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
  },
});
anecdotesService
  .getAll()
  .then((anecdotes) => store.dispatch(setAnecdotes(anecdotes)));

export default store;
