import React, { useEffect, useState } from "react";
import Note from "./component/Note";
import CreateArea from "./component/CreateArea";

function Notepad() {
  const LOCAL_STORAGE_KEY = "notes";
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((noteItem, index) => index !== id);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  }

  return (
   <main>
    <div className="ContainerNote">
      <div className="bg1Note">
        <h1>Notepad</h1>
            <CreateArea onAdd={addNote} />
      </div>
      <div className="bg2Note">
      <div>
        <div className="TaskListHead">
       {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      </div>
    </div>
    </div>
    </div>
    </main>
  );
}

export default Notepad;
