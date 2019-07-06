import React from 'react'
import NoteItem from './NoteItem'

const NotesList = (props) => {

  const notes = props.notes.map((note) => (
    <NoteItem key={note.id} id={note.id} name={note.name} modified={note.modified} />
  ))

    return ( 
        <section>
          <ul>
            {notes}
          </ul>
          <button>Add Note</button>
        </section>
     );
}
 
export default NotesList;