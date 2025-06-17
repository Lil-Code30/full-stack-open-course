import { useState } from "react";

import DisplayCounter from "./components/DisplayCounter";
import Button from "./components/Button";

function App() {
  const name = "Peter";
  const age = 10;

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const [counter, setCounter] = useState(0);

  // All components here

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Part = (props) => {
    return (
      <p>
        {props.part} {props.ex};
      </p>
    );
  };

  const Hello = ({ name, age }) => {
    const yearNow = new Date().getFullYear();
    const bornYear = yearNow - age;
    return (
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were born in {bornYear}</p>
      </div>
    );
  };

  const Content = (props) => {
    return (
      <div>
        <Part part={props.parts[0].name} ex={props.parts[0].exercises} />
        <Part part={props.parts[1].name} ex={props.parts[1].exercises} />
        <Part part={props.parts[2].name} ex={props.parts[2].exercises} />
      </div>
    );
  };

  const Total = (props) => {
    return (
      <p>
        Number of exercises{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    );
  };
  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter(counter - 1);

  return (
    <>
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
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
