export default function StatisticsLine({ text, value }) {
  return (
    <tr>
      <td className="border px-1">{text}</td>
      <td className="border px-1">{value}</td>
    </tr>
  );
}
