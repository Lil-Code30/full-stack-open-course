import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const votesArray = anecdotes.map((_) => 0);

  const [votes, setVotes] = useState(votesArray);

  const handleAnecdote = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length - 1) + 1;
    setSelected(randomNum);
  };
  const handleVote = () => {
    setVotes((prev) => {
      const copyPrev = [...prev];
      copyPrev[selected]++;
      return copyPrev;
    });
  };

  const maxValue = Math.max(...votes);
  const indexOfMax = votes.indexOf(maxValue);
  return (
    <div className="py-2 px-3">
      <h1 className="text-4xl font-bold">Anecdote of the day</h1>
      <p className="text-2xl font-medium my-2">{anecdotes[selected]}</p>
      <p>has {votes[selected]}</p>
      <button
        onClick={handleVote}
        className="hover:cursor-pointer border rounded font-medium text-md px-1  my-2"
      >
        Vote
      </button>
      <button
        onClick={handleAnecdote}
        className="hover:cursor-pointer border rounded font-medium text-md px-1 mx-2 my-2"
      >
        Next Anecdote
      </button>

      <h1 className="text-4xl font-bold">Anecdote with most votes</h1>
      <p className="text-2xl font-medium my-2">{anecdotes[indexOfMax]}</p>
      <p>has {maxValue}</p>
    </div>
  );
};

export default App;
