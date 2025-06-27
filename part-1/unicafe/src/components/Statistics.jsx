export default function Statistics({ data }) {
  const { good, neutral, bad, total, average, positvePercentage } = data;
  console.log(positvePercentage, average);
  return (
    <>
      <h2 className="text-2xl font-semibold mt-2">Statistics</h2>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>All : {total}</p>
      <p>Average : {average}</p>
      <p>%Positive : {positvePercentage}%</p>
    </>
  );
}
