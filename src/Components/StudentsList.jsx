import React from 'react'

export default function StudentsList({students}) {
  return (
    <div>
      <h2>All Students</h2>
      <ul>
        {students.map((student) => (
            <li key={student.id} student={student}>{student.names.preferredName}</li>
        ))}
      </ul>
    </div>
  )
}
