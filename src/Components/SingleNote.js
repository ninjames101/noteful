import React from 'react'
import NoteItem from './NoteItem'
import PropTypes from 'prop-types';

const SingleNote = (props) => {
    return ( 
        <section>
          <ul>
            <NoteItem id={props.note.id} name={props.note.name} modified={props.note.modified}  />
          </ul>
          <p>{props.note.content}</p>
        </section>
     );
}

SingleNote.propTypes = {
  note : PropTypes.object.isRequired
}

export default SingleNote;