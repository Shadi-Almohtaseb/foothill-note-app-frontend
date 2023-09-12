import { useState } from "react";

const useShowModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(!openModal);
  };

  return { showModal, openModal, setOpenModal };
};

export { useShowModal };
