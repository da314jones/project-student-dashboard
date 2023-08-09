import React from 'react'
import "./StudentsList.css"
import Student from './Student'

export default function StudentsList({students}) {
  return (
    <div className="student-list" >
      <h2>All Students</h2>
      <ul>
        {students.map((student) => {
          return<Student key={student.id} student={student} />
})}
      </ul>
    </div>
  )
}
