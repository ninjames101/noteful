import React from 'react';
import { Link } from 'react-router-dom';
import DeleteNoteButton from './DeleteNoteButton';
import PropTypes from 'prop-types';

const NoteItem = (props) => {

    return ( 
                <li><Link to={`/note/${props.id}`}><h2>{props.name}</h2></Link>
                <span>Date Modified on {props.modified}</span>
                <DeleteNoteButton noteId={props.id} />
            </li>
     );
}

NoteItem.propTypes = {
    id : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    modified : PropTypes.string
}
 
export default NoteItem;