import React from 'react';
import { Link } from 'react-router-dom';
import DeleteNoteButton from '../DeleteNoteButton/DeleteNoteButton';
import PropTypes from 'prop-types';
import './NoteItem.css'

const NoteItem = (props) => {
    
    return ( 
                <li className="noteItem"><Link to={`/note/${props.id}`}><h2>{props.name}</h2></Link>
                <span className="noteDate">Date Modified on {new Date(props.modified).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric'  })}</span>
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