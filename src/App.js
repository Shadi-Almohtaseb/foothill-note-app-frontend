import "./App.css";
import Header from "./components/Header";
import NotesContainer from "./components/NotesContainer";

function App() {
  return (
    <div className="dark:bg-[#1f2937] duration-200 h-full">
      <Header />
      <NotesContainer />
    </div>
  );
}

export default App;
