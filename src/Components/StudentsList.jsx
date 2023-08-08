import React from 'react'
import "./StudentsList.css"

export default function StudentsList({students}) {
  return (
    <div className="student-list" >
      <h2>All Students</h2>
      <ul>
        {students.map((student) => (
            <li key={student.id} student={student}>{student.names.preferredName}</li>
        ))}
      </ul>
    </div>
  )
}
