import { useEffect, useState } from "react";
import {
  GetNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
  SearchNote,
} from "../apis/notes";

export function useNotes() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (searchParam) => {
    try {
      const response = await GetNotes(searchParam);
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

  const deleteNote = async (payload) => {
    try {
      await DeleteNote(payload);
      await fetchData();
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  const updateNote = async (noteId, updatedDate) => {
    try {
      await UpdateNote(noteId, updatedDate);
      await fetchData();
    } catch (error) {
      console.error("Failed to update note:", error);
    }
  };

  const searchNote = async (query) => {
    try {
      const data = await SearchNote(query);
      data.json().then((items) => {
        setNotes(items);
        console.log("items: ", items);
      });
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    notes,
    setNotes,
    isLoading,
    error,
    fetchData,
    addNote,
    deleteNote,
    updateNote,
    searchNote,
  };
}
