import React from 'react';
import { Link } from 'react-router-dom';
import DeleteNoteButton from './DeleteNoteButton';

const NoteItem = (props) => {

    return ( 
                <li><Link to={`/note/${props.id}`}><h2>{props.name}</h2></Link>
                <span>Date Modified on {props.modified}</span>
                <DeleteNoteButton noteId={props.id} />
            </li>
     );
}
 
export default NoteItem;