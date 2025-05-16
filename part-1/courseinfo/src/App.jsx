
function App() {

  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using propos to pass data";
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
 

  // All components here

  const Header = (props) => {
    return(
      <h1>{props.course}</h1>
    );
  }

  const Content = (props) => {
    return (
      <>
        <p>
          {props.part1} {props.ex1}
        </p>
        <p>
          {props.part2} {props.ex2}
        </p>
        <p>
          {props.part3} {props.ex3}
        </p>
      </>
    );
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1= {part1} ex1={exercises1} part2= {part2} ex2={exercises2} part3= {part3} ex3={exercises3}/>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
