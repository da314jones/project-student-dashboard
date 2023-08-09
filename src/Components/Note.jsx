import React, { useState } from "react";
import "./Note.css";

export default function Note({ studentId, onAddNote, notes }) {
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");


  function handleNoteSubmit(e) {
    e.preventDefault();
    onAddNote({ commenter, comment });
     setCommenter(" ");
     setComment(" ");
  }

  return (
    <div className="note">
      <h4>1-0n-1 Notes</h4>
      <form onSubmit={handleNoteSubmit} className="form">
      <label htmlFor="commenter" id="commenter" >Commenter </label>
        <input
          type="text"
          value={commenter}
          onChange={(e) => setCommenter(e.target.value)}
          />
        <label htmlFor="comment">Comment</label>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="5"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          ></textarea>
        <button id="add-note">Add Note</button>
      </form>
      {notes.map((note, index) => (
        <div key={`${studentId}-${index}`}>
          <p>Commenter: {note.commenter}</p>
          <p>Comment: {note.comment}</p>
        </div>
      ))}
    </div>
  );
}
