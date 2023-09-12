import React from "react";
import { useThemeSettings } from "../hooks/useThemeSettings";

const Note = () => {
  const { iconColor } = useThemeSettings();

  return (
    <div className="w-[27rem] bg-[#ececec] dark:bg-[#4b5360] rounded-md px-5 py-4">
      <div className="flex items-center justify-between mb-3 border-b-[1.5px] pb-2 border-[#787878b2] dark:text-white">
        <span className="text-3xl">Title</span>
        <div className="p-2  hover:bg-[#d3d3d3c2] duration-200 bg-[#e3e3e3] dark:bg-[#4a576c] rounded-full cursor-pointer">
          <img
            width="20"
            height="20"
            src={`https://img.icons8.com/fluency-systems-filled/48/${iconColor}/more.png`}
            alt="more"
          />
        </div>
      </div>

      <p className="dark:text-white pb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus error
        veniam ducimus ullam facere dolor harum? Veritatis beatae laboriosam,
        quaerat, officiis eum in sint est voluptatibus, laborum autem non at.
      </p>
    </div>
  );
};

export default Note;
