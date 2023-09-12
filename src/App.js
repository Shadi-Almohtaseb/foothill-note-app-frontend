import "./App.css";
import DialogWrap from "./components/DialogWrap";
import Header from "./components/Header";
import NotesContainer from "./components/NotesContainer";

function App() {
  return (
    <div className="dark:bg-[#1f2937] duration-200 h-full">
      <Header />
      <NotesContainer />
      <DialogWrap />
      <DialogWrap />
    </div>
  );
}

export default App;
