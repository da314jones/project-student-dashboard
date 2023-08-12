import React, { useState } from "react";
import "./Note.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

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
      <Form onSubmit={handleNoteSubmit} className="form">
        <FloatingLabel controlId="floatingCommenter" label="Commenter">
          <Form.Control
            type="text"
            value={commenter}
            onChange={(e) => setCommenter(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingComment" label="Comment">
          <Form.Control
            as="textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ height: '100px' }}
          />
        </FloatingLabel>
        <button id="add-note" className="btn btn-primary" >Add Note</button>
      </Form>
      {notes.map((note, index) => (
        <div key={`${studentId}-${index}`}>
          <p>Commenter: {note.commenter}</p>
          <p>Comment: {note.comment}</p>
        </div>
      ))}
    </div>
  );
}
