import { useState } from "react";

import DisplayCounter from "./components/DisplayCounter";
import Button from "./components/Button";
import Hello from "./components/Hello";
import History from "./components/History";

function App() {
  const [counter, setCounter] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, SetTotal] = useState(0);

  const name = "Peter";
  const age = 10;
  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter(counter - 1);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    SetTotal(updatedLeft + right);
  };
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    SetTotal(left + updatedRight);
  };

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="George" age={35 + 60} />
      <Hello name={name} age={age} />
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
      </div>
      <div>
        <DisplayCounter counter={counter} />
        <Button text="plus" onClick={increaseByOne} />
        <Button text="Zero" onClick={setToZero} />
        <Button text="minus" onClick={decreaseByOne} />
      </div>
      <br />
      <div>
        {left}
        <Button text="Left" onClick={handleLeftClick} />
        <Button text="Right" onClick={handleRightClick} />
        {right}
        <br />
        <History allClicks={allClicks} />
        <p>Total clicks {total}</p>
      </div>
    </>
  );
}

export default App;
