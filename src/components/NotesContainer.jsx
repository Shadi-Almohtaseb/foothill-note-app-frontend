import React from "react";
import Note from "./Note";

const NotesContainer = ({
  notes,
  isLoading,
  error,
  deleteNote,
  updateNote,
}) => {
  if (isLoading) {
    return (
      <div className="text-2xl flex items-center text-white justify-center absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] transition-opacity">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-2xl flex items-center text-white justify-center absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] transition-opacity">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="pb-14 pt-10 sm:mx-10 mx-2 flex flex-wrap items-center justify-center gap-5">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      ))}
    </div>
  );
};

export default NotesContainer;
