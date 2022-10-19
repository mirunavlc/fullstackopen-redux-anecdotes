import { useDispatch, useSelector } from "react-redux";
import { updateVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  const vote = (anecdote) => {
    dispatch(updateVote(anecdote));
  };

  const notify = (content) => {
    dispatch(setNotification(`you voted '${anecdote.content}'`, 10));
  };

  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button
          onClick={() => {
            vote(anecdote);
            notify(anecdote.content);
          }}
        >
          vote
        </button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const sortedAnecdotesByVotes = [...anecdotes].sort(
    (a, b) => a.votes - b.votes
  );
  return (
    <div>
      {sortedAnecdotesByVotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </div>
  );
};

export default AnecdoteList;
