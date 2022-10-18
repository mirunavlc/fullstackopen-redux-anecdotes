import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();
  const vote = (id) => {
    console.log("vote", id);
    dispatch(addVote(id));
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
            vote(anecdote.id);
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
