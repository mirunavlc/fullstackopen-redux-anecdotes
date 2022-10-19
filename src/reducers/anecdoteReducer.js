import { createSlice } from "@reduxjs/toolkit";
const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const anecoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload;
      state.push({
        content: content,
        id: getId(),
        votes: 0,
      });
    },
    addVote(state, action) {
      const id = action.payload;
      const anecdoteToChange = state.find((n) => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((note) => (note.id !== id ? note : changedAnecdote));
    },
    setAnecdotes(state, action) {
      return action.payload.map(asObject);
    },
  },
});

export const { createAnecdote, addVote, setAnecdotes } = anecoteSlice.actions;
export default anecoteSlice.reducer;
