import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function removeNote(indexDelete) {
    setNotes(notes.filter((val, index) => index !== indexDelete));
  }

  function addNote(input) {
    setNotes((prevNotes) => {
      return [...prevNotes, input];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          removeNote={removeNote}
          index={index}
          key={index}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
