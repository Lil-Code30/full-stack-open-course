import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);
  return (
    <div>
      <h1 className="text-2xl font-black">Notes</h1>
      <div>
        <button
          className="border px-2 bg-green-600 rounded text-white"
          onClick={() => setShowAll(!showAll)}
        >
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input
          className="border my-2 rounded p-1"
          onChange={handleNoteChange}
          value={newNote}
        />{" "}
        <br />
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
