import React from 'react'
import StudentDetails from './StudentDetails'

export default function Student({student}) {
  function handleAddNote() {

  }
  
  return (
    <div className='student' >
      <img src={student.profilePhoto} alt={`${student.names.preferredName}'s profile`} />
      <p>{student.names.preferredName}</p>
      <p>{student.username}</p>
      <p>{student.dob}</p>
      <button>Show More...</button>
      <StudentDetails details={student} onAddNote={handleAddNote} />
    </div>
  )
}


