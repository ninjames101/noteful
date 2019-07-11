import React from 'react';
import { NotefulContext } from './NotefulContext'

const DeleteNoteButton = (props) => {
    return ( 
        <NotefulContext.Consumer>
            {({deleteNote}) => (
            <button onClick={() => deleteNote(props.noteId)}>Delete Note</button>
            )}
        </NotefulContext.Consumer>
     );
}
 
export default DeleteNoteButton;