
function App() {

  const course = "Half Stack application development";
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
 

  // All components here

  const Header = (props) => {
    console.log(props);
    return(
      <h1>{props.course}</h1>
    );
  }

  const Part = (props) => {
    return (
      <p>
         {props.part} {props.ex};
      </p>
    );
  }

  const Content = (props) => {
    return (
      <div>
        <Part part= {props.part1} ex={props.ex1} />
        <Part part= {props.part2} ex={props.ex2} />
        <Part part= {props.part3} ex={props.ex3} />
      </div>
    );
  }

  return (
    <div>
      <Header course={course}/>
      <Content  part1= {part1.name} ex1={part1.exercises}  part2= {part2.name} ex2={part2.exercises} part3= {part3.name} ex3={part3.exercises}/>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

export default App
