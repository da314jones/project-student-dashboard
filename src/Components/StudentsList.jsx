import React from 'react'
import "./StudentsList.css"
import Student from './Student'

export default function StudentsList({students, selectedCohort}) {
  return (
    <div className="student-list" >
      <h2 className='student-title' >Student Profiles</h2>
      <h3>{selectedCohort}</h3>
      <ul>
        {students.map((student) => {
          return<Student key={student.id} student={student} />
})}
      </ul>
    </div>
  )
}
