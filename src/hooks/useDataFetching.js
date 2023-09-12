import { useEffect, useState } from "react";
import { GetNotes, CreateNote } from "../apis/notes";

export function useNotes() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await GetNotes();
      console.log("response.notes: ", response.notes);
      setNotes(response.notes);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  const addNote = async (payload) => {
    try {
      await CreateNote(payload);
      await fetchData();
    } catch (error) {
      console.error("Failed to create note:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { notes, setNotes, isLoading, error, fetchData, addNote };
}
