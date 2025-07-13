import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);

  const addNote = (e) => {
    e.preventDefault();

    console.log("Button clicked", e.target);
  };

  return (
    <div>
      <h1 className="text-2xl font-black">Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input />
        <button
          type="submit"
          className="hover:cursor-pointer bg-blue-600 border px-2 rounded text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default App;
