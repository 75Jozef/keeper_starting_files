import React, { useState } from "react";
import Note from "./Note";

function CreateArea(props) {
  const [note, setNote] = useState([
    {
      title: "",
      content: ""
    }
  ]);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    // //táto call funcia zamedzí primárne tomu, aby sa refreshla obrazovka po stlačení buttonu, ktorý je vnútri <form>, pretože to je jeho primárna funkcia, aby reloadol stránku; takto po stlačení buttonu, ktorý leží priamo vo formulári môžeme zamedziť tomu, aby refrešoval;
    props.onAdd(note);
    //tu pošleme do App.jsx note cez prop, ktorou je vlastne funkcia,ktorá sa púšťa nie tu v tejto funkcii ale púšťa sa v App.jsx ako AddNote();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
          autoComplete="off"
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          autoComplete="off"
          value={note.value}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
