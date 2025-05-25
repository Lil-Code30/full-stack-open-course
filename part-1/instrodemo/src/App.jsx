const Hello = (props) => {

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>Hello World {props.name}, you are {props.age} years old.</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

function App() {

  const name = "Peter";
  const age = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="George" age={35 + 60}/>
      <Hello name={name} age={age}/>
    </>
  )
}

export default App
