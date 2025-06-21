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

export default Hello;
