import React from 'react';
import NoteItem from './NoteItem';
import { Link } from 'react-router-dom';

const NotesList = (props) => {

  const notes = props.notes.map((note) => (
    <NoteItem key={note.id} id={note.id} name={note.name} modified={note.modified} />
  ))

    return ( 
        <section>
          <ul>
            {notes}
          </ul>
          <button><Link to='/addnote'>Add Note</Link></button>
        </section>
     );
}
 
export default NotesList;