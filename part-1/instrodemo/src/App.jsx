import { useState } from "react";

import DisplayCounter from "./components/DisplayCounter";
import Button from "./components/Button";

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };

  return (
    <div>
      <p>
        Hello World {props.name}, you are {props.age} years old.
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

function App() {
  const [counter, setCounter] = useState(0);
  const name = "Peter";
  const age = 10;
  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter(counter - 1);

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
    </>
  );
}

export default App;
