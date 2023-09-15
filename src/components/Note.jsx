import React from "react";
import { useShowModal } from "../hooks/useShowModal";
import NoteDetailsModal from "./NoteDetailsModal";

const Note = ({ note, deleteNote, updateNote }) => {
  const { showNoteDetailsModal, openNoteDetailsModal } = useShowModal();
  const truncateString = (str, maxLen) => {
    if (str.length > maxLen) {
      return str.slice(0, maxLen) + "...";
    }
    return str;
  };

  const truncatedTitle = truncateString(note.title, 20);
  const truncatedContent = truncateString(note.content, 300);

  console.log(note);

  return (
    <div className="w-[27rem] bg-[#ececec] dark:bg-gray-700 rounded-md px-5 py-4">
      <div className="flex items-center justify-between mb-3 border-b-[1.5px] pb-2 border-[#787878b2] dark:text-white">
        <span className="text-3xl">{truncatedTitle}</span>
        <div
          onClick={showNoteDetailsModal}
          className="p-2  hover:bg-[#d3d3d3c2] duration-200 bg-[#e3e3e3] dark:bg-gray-600 dark:hover:bg-gray-500 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
      </div>
      <NoteDetailsModal
        showNoteDetailsModal={showNoteDetailsModal}
        openNoteDetailsModal={openNoteDetailsModal}
        note={note}
        deleteNote={deleteNote}
        updateNote={updateNote}
      />

      <p className="dark:text-white pb-3">{truncatedContent}</p>
    </div>
  );
};

export default Note;
