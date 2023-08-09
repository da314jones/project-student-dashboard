import React, { useState } from 'react'
import StudentDetails from './StudentDetails'
import "./Student.css"

export default function Student({student, onAddNote, notes}) {
  const [showMore, setShowMore] = useState(false)
    
  return (
    <div className='student' >
      <img src={student.profilePhoto} alt={`${student.names.preferredName}'s profile`} />
      <p>{student.names.preferredName}</p>
      <p>{student.username}</p>
      <p>{student.dob}</p>
      <button id="show-more">Show More...</button>
      <StudentDetails details={student} onAddNote={onAddNote} notes={notes} />
    </div>
  )
}


