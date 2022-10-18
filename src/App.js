import { useSelector, useDispatch } from "react-redux";
import { addThe } from "./reducers/anecdoteReducer";
import Anecdotes from "./components/Anecdotes";

const App = () => {
  const anecdotes = useSelector((state) => state).sort(
    (a, b) => a.votes - b.votes
  );
  const dispatch = useDispatch();

  const add = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(addThe(content));
  };

  return (
    <>
      <Anecdotes anecdotes={anecdotes} />
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

export default App;
