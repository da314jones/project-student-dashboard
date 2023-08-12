import React, { useState } from "react";
import StudentDetails from "./StudentDetails";
import "./Student.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Student({ student }) {
  const [showMore, setShowMore] = useState(false);
  const [notes, setNotes] = useState(student.notes || []);

  const toggleDetails = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const handleAddNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <Card className="student">
      <Card.Img
        src={student.profilePhoto}
        className="student-image"
        alt={`${student.names.preferredName}'s profile`}
      />
      <Card.Body className="card-body">
        <Card.Title>{student.names.preferredName}</Card.Title>
        <Card.Text>{student.username}</Card.Text>
        <Card.Text>{student.dob}</Card.Text>
        <Button className="detail-button" variant="info" onClick={toggleDetails} id="show-more">
          {showMore ? "Show Less..." : "Show More..."}
        </Button>
        {showMore && (
          <StudentDetails
            showMore={showMore}
            details={student}
            onAddNote={handleAddNote}
            notes={notes}
          />
        )}
      </Card.Body>
    </Card>
  );
}




