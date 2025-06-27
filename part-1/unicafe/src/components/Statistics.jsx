import StatisticsLine from "./StatisticsLine";

export default function Statistics({ data }) {
  const { good, neutral, bad, total, average, positvePercentage } = data;
  return (
    <>
      <h2 className="text-2xl font-semibold mt-2">Statistics</h2>
      <table className="border p-0.5 text-center">
        <thead>
          <tr>
            <th className="border px-1">Name</th>
            <th className="border px-1">Result</th>
          </tr>
        </thead>
        <tbody>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="All" value={total} />
          <StatisticsLine text="Average" value={average} />
          <StatisticsLine text="%Positive" value={positvePercentage} />
        </tbody>
      </table>
    </>
  );
}
