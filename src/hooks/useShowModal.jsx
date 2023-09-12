import { useState } from "react";

const useShowModal = () => {
  const [openNoteDetailsModal, setOpenNoteDetailsModal] = useState(false);
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);

  const showNoteDetailsModal = () => {
    setOpenNoteDetailsModal(!openNoteDetailsModal);
  };

  const showAddNoteModal = () => {
    setOpenAddNoteModal(!openAddNoteModal);
  };

  return {
    showNoteDetailsModal,
    showAddNoteModal,
    openNoteDetailsModal,
    openAddNoteModal,
  };
};

export { useShowModal };
