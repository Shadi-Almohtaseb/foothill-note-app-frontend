import React, { useState } from "react";

const NoteDetailsModal = ({
  showNoteDetailsModal,
  openNoteDetailsModal,
  note,
  deleteNote,
  updateNote,
}) => {
  const handelDeleteNote = () => {
    deleteNote(note.id).then(showNoteDetailsModal);
  };

  const handelUpdateNote = () => {
    const updatedDate = {
      title,
      content,
    };
    updateNote(note.id, updatedDate).then(showNoteDetailsModal);
  };

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  return (
    <div
      id="modalBackground"
      onClick={showNoteDetailsModal}
      className={`fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.5)] transition-opacity ${
        openNoteDetailsModal
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } flex items-center justify-center`}
    >
      <div
        id="defaultModal"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-lg lg:w-[50%] md:w-[65%] w-[90%] shadow dark:bg-gray-700"
      >
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Edit This Note
          </h3>
          <button
            type="button"
            onClick={showNoteDetailsModal}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="defaultModal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="outline-none flex items-center w-full px-4 py-3 sm:pl-4 pl-2 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="10"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="outline-none flex items-center w-full p-4 sm:pl-4 pl-2 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            onClick={handelUpdateNote}
            data-modal-hide="defaultModal"
            type="button"
            className="text-w-500 bg-blue-500 border-none hover:bg-blue-700 duration-200 text-white hover:bg-w-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-w-200 text-sm font-medium px-5 py-2.5 hover:text-w-900 focus:z-10 dark:bg-w-700 dark:text-w-300 dark:border-w-500 dark:hover:text-white dark:hover:bg-w-600 dark:focus:ring-w-600"
          >
            Save
          </button>
          <button
            onClick={handelDeleteNote}
            data-modal-hide="defaultModal"
            type="button"
            className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailsModal;
