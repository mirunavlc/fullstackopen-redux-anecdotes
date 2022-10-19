import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import anecdotesService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const add = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    const newAnecdote = await anecdotesService.createNew(content);
    dispatch(createAnecdote(newAnecdote));
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
