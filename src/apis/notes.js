const deployedAPI = "https://foothillnoteapp-production.up.railway.app";

export async function GetNotes(q) {
  try {
    const response = await fetch(
      `${deployedAPI}/notes/get-notes?q=${q || ""}&page=1&pageSize=1000`
    );

    if (!response.ok) {
      const statusText = await response.statusText;
      console.error(`HTTP error! Status: ${response.status} - ${statusText}`);
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw new Error("Failed to fetch data");
  }
}

//POST a new Note
export async function CreateNote(newNoteData) {
  try {
    return await fetch(`${deployedAPI}/notes/create-note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNoteData),
    });
  } catch (error) {
    console.error("Failed to create note:", error);
    throw new Error("Failed to create note");
  }
}

//DELETE a Note
export async function DeleteNote(noteId) {
  try {
    return await fetch(`${deployedAPI}/notes/${noteId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Failed to delete note:", error);
    throw new Error("Failed to delete note");
  }
}

//UPDATE a Note
export async function UpdateNote(noteId, updatedDate) {
  try {
    return await fetch(`${deployedAPI}/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDate),
    });
  } catch (error) {
    console.error("Failed to update note:", error);
    throw new Error("Failed to update note");
  }
}

//Search a Note
export async function SearchNote(query) {
  try {
    return await fetch(`${deployedAPI}/notes?q=${query}`, {
      method: "GET",
    });
  } catch (error) {
    console.error("Failed to search note:", error);
    throw new Error("Failed to search note");
  }
}
