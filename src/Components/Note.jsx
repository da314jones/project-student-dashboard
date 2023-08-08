import React, { useState } from 'react'

export default function Note({studentId, onAddNote}) {
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");
  const [notes, setNotes] = useState([]);

  function handleNoteSubmit(e) {
    e.preventDefault();
    setNotes([...notes, {commenter, comment}])
    setCommenter("");
    setComment("");
  }

  return (
    <div>
      <h4>1-0n-1 Notes</h4>
      {notes.map((note, index) => (
        <div key={studentId}>
        <p>Commenter: {note.commenter}</p>
        <p>Comment: {note.comment}</p>
      </div>
    ))}
        <form onSubmit={handleNoteSubmit}>
      <label htmlFor="commenter">Commenter</label>
      <input type="text" value={commenter} onChange={(e) => setCommenter(e.target.value)}/>
      <label htmlFor="comment">Comment</label>
      <textarea name="comment" id="comment" cols="30" rows="5" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
      <button>Add Note</button>
      </form>
    </div>
  )
}
