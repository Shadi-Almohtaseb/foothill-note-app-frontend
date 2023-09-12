import React, { useState } from "react";
import { useThemeSettings } from "../hooks/useThemeSettings";
import { useShowModal } from "../hooks/useShowModal";
import BasicModal from "./Modal";

const Note = () => {
  const { iconColor } = useThemeSettings();
  const { showModal, openModal } = useShowModal();

  return (
    <div className="w-[27rem] bg-[#ececec] dark:bg-[#4b5360] rounded-md px-5 py-4">
      <div className="flex items-center justify-between mb-3 border-b-[1.5px] pb-2 border-[#787878b2] dark:text-white">
        <span className="text-3xl">Title</span>
        <div
          onClick={showModal}
          className="p-2  hover:bg-[#d3d3d3c2] duration-200 bg-[#e3e3e3] dark:bg-[#4a576c] rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
      <BasicModal showModal={showModal} openModal={openModal} />

      <p className="dark:text-white pb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus error
        veniam ducimus ullam facere dolor harum? Veritatis beatae laboriosam,
        quaerat, officiis eum in sint est voluptatibus, laborum autem non at.
      </p>
    </div>
  );
};

export default Note;
