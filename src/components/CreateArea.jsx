import React, { useState } from "react";

function CreateArea() {
  const [titleText, changeTitleText] = useState("");
  const [noteText, changeNoteText] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "title") {
      changeTitleText(value);
    } else {
      changeNoteText(value);
    }
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={titleText}
          autoComplete="off"
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          autoComplete="off"
          value={noteText}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
