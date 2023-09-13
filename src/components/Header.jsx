import React, { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { useThemeSettings } from "../hooks/useThemeSettings";
// import { useSearchParams } from "react-router-dom";

const Header = ({ searchNote, isLoading, error }) => {
  const { currentMode, iconColor, toggleTheme } = useThemeSettings();
  // const [searchParam, setSearchParam] = useSearchParams();

  const [searchParam, setSearchParam] = useState();

  // const q = searchParam.get("q") || "";

  const handelSearchNote = async (e) => {
    e.preventDefault();
    await searchNote(searchParam);
  };

  const handleInputChange = (e) => {
    setSearchParam(e.target.value);
    // if (q) {
    //   setSearchParam({ q });
    // } else {
    //   setSearchParam({});
    // }
  };

  if (isLoading) {
    return (
      <div className="text-2xl flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] transition-opacity">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-2xl flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] transition-opacity">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between mx-5 py-2">
      <div className="items-center gap-2 sm:flex hidden cursor-pointer">
        <img
          width="64"
          height="64"
          src={`https://img.icons8.com/sf-black-filled/64/${iconColor}/note.png`}
          alt="note"
        />

        <span className="text-xl dark:text-white md:flex hidden">NoteApp</span>
      </div>

      <form className="md:w-[70%] w-full md:px-16 pr-6">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            onChange={handleInputChange}
            className="outline-none flex items-center w-full p-4 sm:pl-10 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for notes.."
            required
          />
          <button
            type="submit"
            onClick={handelSearchNote}
            className="text-white absolute sm:right-2.5 right-1.5 sm:bottom-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:px-4 sm:py-2 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className="hidden sm:flex">Search</span>
            <img
              className="sm:hidden flex"
              width="20"
              height="20"
              src="https://img.icons8.com/windows/32/FFFFFF/search--v1.png"
              alt="search--v1"
            />
          </button>
        </div>
      </form>
      <ThemeToggle currentMode={currentMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Header;
