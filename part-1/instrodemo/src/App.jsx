import { useState } from "react";

import DisplayCounter from "./components/DisplayCounter";
import Button from "./components/Button";
import Hello from "./components/Hello";

function App() {
  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const name = "Peter";
  const age = 10;
  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter(counter - 1);

  const handleLeftClick = () => {
    setClicks({
      ...clicks,
      left: clicks.left + 1,
    });
  };

  const handleRightClick = () => {
    setClicks({
      ...clicks,
      right: clicks.right + 1,
    });
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
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    </>
  );
}

export default App;
