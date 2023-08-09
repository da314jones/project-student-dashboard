import { useState } from "react";
import Note from "./Note";
import "./StudentDetails.css";

export default function StudentDetails({ details, studentId, onAddNote, notes, showMore }) {
const [showNotes, setShowNotes] = useState(false);
const toggleNotes = () => {
  setShowNotes(prevShowNotes => !prevShowNotes)
}
  const total = details.codewars.current.total;
  const goal = details.codewars.goal.total;
  const percentage = ((total / goal) * 100).toFixed(0);
const assignments = (details.cohort.scores.assignments * 100)
const projects = (details.cohort.scores.projects * 100)
const certifications = (details.cohort.scores.assessments * 100)

  return (
    <div className="student-details">
      <h4>CodeWars:</h4>
      <p>Current Total: {details.codewars.current.total}</p>
      <p>Last Week: {details.codewars.current.lastWeek}</p>
      <p>Goal: {details.codewars.goal.total}</p>
      <p>Percent of Goal Achieved: {percentage}%</p>
      <h4>Scores:</h4>
      <p>Assignments: {assignments}%</p>
      <p>Projects: {projects}%</p>
      <p>Assessments: {certifications}%</p>
      <h4>Certifications:</h4>
      <p>Resume: {details.certifications.resume}</p>
      <p>LinkedIn: {details.certifications.linkedin}</p>
      <p>Mock Interview: {details.certifications.github}</p>
      <p>Git Hub: {details.certifications.mockInterview}</p>
      <button onClick={toggleNotes} id="note-button">Notes</button>
      {showNotes && <Note showNotes={showNotes} studentId={studentId} onAddNote={onAddNote} notes={notes} />}
    </div>
  );
}
