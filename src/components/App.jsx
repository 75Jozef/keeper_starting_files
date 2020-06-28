import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNotes] = useState({
    key: 0,
    id: 0,
    title: "",
    note: ""
  });

  function addNote() {
    const newNote = { title: titleText, note: noteText };
    updateNotes(prevNotes => {
      return { ...prevNotes, newNote };
    });
  }

  function deleteItem(id) {
    updateNotes(prevNotes => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={addNote} />

      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onChecked={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
