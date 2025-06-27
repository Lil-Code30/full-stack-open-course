import StatisticsLine from "./StatisticsLine";

export default function Statistics({ data }) {
  const { good, neutral, bad, total, average, positvePercentage } = data;
  return (
    <>
      <h2 className="text-2xl font-semibold mt-2">Statistics</h2>
      <div>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <StatisticsLine text="All" value={total} />
        <StatisticsLine text="Average" value={average} />
        <StatisticsLine text="%Positive" value={positvePercentage} />
      </div>
    </>
  );
}
