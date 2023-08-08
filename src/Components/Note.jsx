import React from 'react'

export default function Note({note}) {
  return (
    <div>
      <h4>1-0n-1 Notes</h4>
      {note && (
        <div>
          <p>Commenter: {note.commenter}</p>
          <p>Comment: {note.comment}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
      <label htmlFor="commenter">Commenter</label>
      <input type="text" />
      <label htmlFor="comment">Comment</label>
      <textarea name="" id="" cols="30" rows="5"></textarea>      <button>Add Note</button>
      </form>
    </div>
  )
}
