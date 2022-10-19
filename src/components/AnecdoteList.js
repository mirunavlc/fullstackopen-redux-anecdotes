import { updateVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import { connect } from "react-redux";

const Anecdote = (props) => {
  const anecdote = props.anecdote;
  const vote = (anecdote) => {
    props.updateVote(anecdote);
  };

  const notify = (content) => {
    props.setNotification(`you voted '${anecdote.content}'`, 10);
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

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes;
  const sortedAnecdotesByVotes = [...anecdotes].sort(
    (a, b) => a.votes - b.votes
  );
  return (
    <div>
      {sortedAnecdotesByVotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          updateVote={props.updateVote}
          setNotification={props.setNotification}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
  };
};
const mapDispatchToProps = {
  updateVote,
  setNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
