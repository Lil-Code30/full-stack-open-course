export default function Button({ onClick, text }) {
  return (
    <button
      className="hover:cursor-pointer border rounded px-1 py-0.5"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
