import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification,
} from "../reducers/notificationReducer";
import serviceAnecdotes from "../services/anecdotes";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();
  const vote = (anecdote) => {
    console.log("vote", anecdote.id);
    serviceAnecdotes.updateVote(anecdote);
    dispatch(addVote(anecdote.id));
  };

  const notify = (content) => {
    console.log("notify");
    dispatch(setNotification(content));
  };

  const remove = (content) => {
    console.log("remove notification");
    dispatch(removeNotification());
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
            setTimeout(() => {
              remove();
            }, 5000);
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
