const History = (props) => {
  if (props.allClicks.length === 0) {
    return <p>The app is used by pressing the buttons</p>;
  }

  return <p>Button press history: {props.allClicks.join(" ")}</p>;
};

export default History;
