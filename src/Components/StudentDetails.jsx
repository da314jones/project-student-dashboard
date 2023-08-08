import React from 'react'
import Notes from './Note'

export default function StudentDetails({details}) {
  return (
    <div>
      <h4>CodeWars:</h4>
      <p>Current Total:</p>
      <p>Last Week</p>
      <p>Goal:
        <p>Percent of Goal Achieved:</p>
        <h4>Scores:</h4>
        <p>Assignments:</p>
        <p>Projects:</p>
        <p>Assessments</p>
        <h4>Certifications:</h4>
        <p>Resume:</p>
        <p>LinkedIn</p>
        <p>Mock Interview:</p>
        <p>Git HUb:</p>
        <button>Notes</button>
        <Notes notes={details.notes} />
      </p>
    </div>
  )
}
