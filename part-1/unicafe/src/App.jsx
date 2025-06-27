import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const choices = [
    { text: "good", fn: () => setGood((prev) => prev + 1) },
    { text: "neutral", fn: () => setNeutral((prev) => prev + 1) },
    { text: "bad", fn: () => setBad((prev) => prev + 1) },
  ];

  const total = good + neutral + bad;
  const average = (1 * good + 0 * neutral + bad * -1) / total || 0;
  const positvePercentage = (good / total) * 100 || 0;
  return (
    <div className="p-3">
      <h1 className="text-3xl font-bold">Give feedback</h1>
      <div className="flex gap-x-2 mt-2">
        {choices.map((el) => (
          <Button key={el.text} onClick={el.fn} text={el.text} />
        ))}
      </div>
      {total !== 0 ? (
        <Statistics
          data={{ good, neutral, bad, total, average, positvePercentage }}
        />
      ) : (
        <>
          <h2 className="text-2xl font-semibold mt-2">Statistics</h2>
          <p>No feeback given</p>
        </>
      )}
    </div>
  );
}

export default App;
