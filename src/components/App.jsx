import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNotes] = useState([]);

  function addNote(newNote) {
    updateNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    updateNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* tu pošlem odkaz na funkciu addNote, ktorú keď použijem na inom liste - napr. v CreateArea funkcii, tak si pustí funkciu priamo v App() a ešte si so sebou aj prinesie alebo funkciu alebo nejaký objekt či premennú; v tomto prípade Note; takže nebudem posielať do CreateArea hodnotu, ale posuniem tam odkaz na funkciu, ktorá sa pustí tu; ako shortcut */}

      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
