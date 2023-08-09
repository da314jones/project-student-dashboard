import React, { useState } from 'react'
import StudentDetails from './StudentDetails'
import "./Student.css"

export default function Student({student, onAddNote, notes}) {
  const [showMore, setShowMore] = useState(false);
  const toggleDetails = () => {
    setShowMore(prevShowMore => !prevShowMore);
  }
      
  return (
    <div className='student' >
      <img src={student.profilePhoto} alt={`${student.names.preferredName}'s profile`} />
      <p>{student.names.preferredName}</p>
      <p>{student.username}</p>
      <p>{student.dob}</p>
      <button onClick={toggleDetails} id="show-more">Show More...</button>
      {showMore && <StudentDetails  showMore={showMore} details={student} onAddNote={onAddNote} notes={notes} />}
    </div>
  )
}


