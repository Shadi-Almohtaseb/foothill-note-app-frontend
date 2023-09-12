import React from "react";
import { useShowModal } from "../hooks/useShowModal";
import AddNoteModal from "./AddNoteModal";

const AddNoteBtn = () => {
  const { showNoteDetailsModal, openNoteDetailsModal } = useShowModal();
  return (
    <div className="sm:mx-14 mx-5 mt-5 cursor-pointer">
      <button
        onClick={showNoteDetailsModal}
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        class="block  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add New Note +
      </button>
      <AddNoteModal
        showNoteDetailsModal={showNoteDetailsModal}
        openNoteDetailsModal={openNoteDetailsModal}
      />
    </div>
  );
};

export default AddNoteBtn;
