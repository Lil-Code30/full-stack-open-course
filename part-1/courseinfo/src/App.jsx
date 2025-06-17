function App() {
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

  return (
    <>
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    </>
  );
}

export default App;
