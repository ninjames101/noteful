import React from 'react';
import NoteItem from './NoteItem';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

NotesList.defaultProps = {
  notes: []
}

NotesList.propTypes = {
  notes : PropTypes.array.isRequired
}
 
export default NotesList;