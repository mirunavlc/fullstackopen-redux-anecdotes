import { createAnecdote } from "../reducers/anecdoteReducer";
import { connect } from "react-redux";

const AnecdoteForm = (props) => {
  const add = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.createAnecdote(content);
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  createAnecdote,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm);
