import "./App.css";
import AddNoteBtn from "./components/AddNoteBtn";
import AddNoteModal from "./components/AddNoteModal";
import Header from "./components/Header";
import NotesContainer from "./components/NotesContainer";
import { useNotes } from "./hooks/useNotes";
import { useShowModal } from "./hooks/useShowModal";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const {
    addNote,
    deleteNote,
    updateNote,
    searchNote,
    fetchData,
    notes,
    isLoading,
    error,
  } = useNotes();
  const { showNoteDetailsModal, openNoteDetailsModal } = useShowModal();
  return (
    <BrowserRouter>
      <div className="dark:bg-[#1f2937] duration-200 h-full min-h-screen">
        <Header
          fetchData={fetchData}
          searchNote={searchNote}
          isLoading={isLoading}
          error={error}
        />
        <AddNoteBtn showNoteDetailsModal={showNoteDetailsModal} />
        <AddNoteModal
          showNoteDetailsModal={showNoteDetailsModal}
          openNoteDetailsModal={openNoteDetailsModal}
          addNote={addNote}
        />
        <Routes>
          {/* Default route */}
          <Route
            path="/"
            element={
              <NotesContainer
                notes={notes}
                isLoading={isLoading}
                error={error}
                deleteNote={deleteNote}
                updateNote={updateNote}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
