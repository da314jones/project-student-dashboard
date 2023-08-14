import React, { useState } from "react";
import StudentDetails from "./StudentDetails";
import "./Student.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Student({ student, onAddNote, studentNotes }) {
  console.log("Student onAddNote:", onAddNote);
  const [showMore, setShowMore] = useState(false);
  const [notes, setNotes] = useState(student.notes || [])

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

const handleAddNote = (newNote) => {
  setNotes([...notes, newNote]);
  onAddNote(student.id, newNote);
}




  return (
    <Card className="student">
      <Card.Img
        src={student.profilePhoto}
        className={`student-image ${showMore ? "enlarge" : ""}`}
        alt={`${student.names.preferredName}'s profile`}
      />
      <Card.Body className="card-body">
        <Card.Title className="name-title">
          {student.names.preferredName}
        </Card.Title>
        <Card.Text>{student.username}</Card.Text>
        <Card.Text>{student.dob}</Card.Text>
        <Button
          className="detail-button"
          variant="info"
          style={{ width: " 20%" }}
          id="showMore"
          onClick={toggleShowMore}
        >
          {showMore ? "Show Less..." : "Show More..."}
        </Button>
        {showMore && (
          <StudentDetails
            student={student}
            onAddNote={handleAddNote} 
            notes={notes}
            />
        )}
      </Card.Body>
    </Card>
  );
}


