const Hello = ({name, age}) => {
  return (
    <div>
      <p>Hello World {name}, you are {age} years old.</p>
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
