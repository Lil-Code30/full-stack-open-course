import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const choices = [
    { text: "good", fn: () => setGood((prev) => prev + 1) },
    { text: "neutral", fn: () => setNeutral((prev) => prev + 1) },
    { text: "bad", fn: () => setBad((prev) => prev + 1) },
  ];
  return (
    <div className="p-3">
      <h1 className="text-3xl font-bold">Give feedback</h1>
      <div className="flex gap-x-2 mt-2">
        {choices.map((el) => (
          <Button onClick={el.fn} text={el.text} />
        ))}
      </div>
      <h2 className="text-2xl font-semibold mt-2">Statistics</h2>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
    </div>
  );
}

export default App;
