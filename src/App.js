import "./App.css";
import AddNoteBtn from "./components/AddNoteBtn";
import AddNoteModal from "./components/AddNoteModal";
import Header from "./components/Header";
import NotesContainer from "./components/NotesContainer";
import { useNotes } from "./hooks/useDataFetching";
import { useShowModal } from "./hooks/useShowModal";

function App() {
  const { addNote, notes, isLoading, error } = useNotes();
  const { showNoteDetailsModal, openNoteDetailsModal } = useShowModal();
  return (
    <div className="dark:bg-[#1f2937] duration-200 h-full min-h-screen">
      <Header />
      <AddNoteBtn showNoteDetailsModal={showNoteDetailsModal} />
      <AddNoteModal
        showNoteDetailsModal={showNoteDetailsModal}
        openNoteDetailsModal={openNoteDetailsModal}
        addNote={addNote}
      />
      <NotesContainer notes={notes} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
