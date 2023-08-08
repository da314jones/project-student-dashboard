import React from 'react'
import StudentDetails from './StudentDetails'

export default function Student({student}) {
  return (
    <div className='student' >
      <img src={student.profilePhoto} alt={`${student.names.preferredName}'s profile`} />
      <p>{student.names.preferredName}</p>
      <p>{student.username}</p>
      <p>{student.dob}</p>
      <button>Show More...</button>
      <StudentDetails details={student} />
    </div>
  )
}
