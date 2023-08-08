import React from 'react'
import Note from './Note'

export default function NotesList({notes}) {
  return (
    <div>
      <Note key={index} note={note} />
    </div>
  )
}
