import React from 'react'
import "./StudentsList.css"
import Student from './Student'

export default function StudentsList({students, onAddNote, notes}) {
  console.log(notes)
  return (
    <div className="student-list" >
      <h2>All Students</h2>
      <ul>
        {students.map((student) => {
          return<Student key={student.id} student={student} notes={student.notes} onAddNote={onAddNote} />
})}
      </ul>
    </div>
  )
}
