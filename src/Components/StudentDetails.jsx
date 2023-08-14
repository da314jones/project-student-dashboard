import { useState } from "react";
import Note from "./Note";
import "./StudentDetails.css";
import { Card, ListGroup } from "react-bootstrap";

export default function StudentDetails({
  student,
  onAddNote,
  notes
}) {
  console.log("StudentDetails onAddNote:", onAddNote);
  const [showNotes, setShowNotes] = useState(false);
  const toggleNotes = () => {
    setShowNotes((prevShowNotes) => !prevShowNotes);
  };



  const { current, goal } = student.codewars;
  const { assignments, projects, assessments } = student.cohort.scores;
  const percentage = ((current.total / goal.total) * 100).toFixed(0);
  const { resume, linkedin, github, mockInterview } = student.certifications;

  const onTrack = () => {
    return resume && linkedin && mockInterview && github && current.total >= 600
      ? "On Track"
      : "Off Track";
  };

  const trackStatus = onTrack();


  return (
    <Card className="student-details">
      <Card.Title style={{color: "whitesmoke", backgroundColor: "black"}} >CodeWars:</Card.Title>
        <ListGroup>
          <ListGroup.Item className="lgi" >Current Total: {current.total}</ListGroup.Item>
          <ListGroup.Item className="lgi" >Last Week: {current.lastWeek}</ListGroup.Item>
          <ListGroup.Item className="lgi" >Goal: {goal.total}</ListGroup.Item>
          <ListGroup.Item className="lgi" >
            Percent of Goal Achieved: {percentage}%
          </ListGroup.Item>
        </ListGroup>

      <Card.Title style={{color: "whitesmoke", backgroundColor: "black"}} >Scores:</Card.Title>
      <ListGroup>
        <ListGroup.Item className="lgi" >Assignments: {assignments * 100}%</ListGroup.Item>
        <ListGroup.Item className="lgi" >Projects: {projects * 100}%</ListGroup.Item>
        <ListGroup.Item className="lgi" >Assessments: {assessments * 100}%</ListGroup.Item>
      </ListGroup>

      <Card.Title style={{color: "whitesmoke", backgroundColor: "black"}} >Certifications:</Card.Title>
      <ListGroup>
        <ListGroup.Item className="lgi" >Resume: {resume ? "✅" : "❌"}</ListGroup.Item>
        <ListGroup.Item className="lgi" >LinkedIn: {linkedin ? "✅" : "❌"}</ListGroup.Item>
        <ListGroup.Item className="lgi" >
          Mock Interview: {mockInterview ? "✅" : "❌"}
        </ListGroup.Item>
        <ListGroup.Item className="lgi" >Git Hub: {github ? "✅" : "❌"}</ListGroup.Item>

      </ListGroup>
      <Card.Title style={{color: "whitesmoke", backgroundColor: "black"}} >Status:</Card.Title>
      <ListGroup>
        <ListGroup.Item
          className={trackStatus === "On Track" ? "on-track" : "off-track"}
        >
          {onTrack()}
        </ListGroup.Item>
      </ListGroup>

      <button onClick={toggleNotes} className="btn btn-primary" id="note-button">
        {showNotes ? "Hide Notes" : "Notes"}
      </button>
      {showNotes && (
        <Note
          student={student}
          notes={notes}
          onAddNote={onAddNote}
        />
      )}
    </Card>
  );
}


