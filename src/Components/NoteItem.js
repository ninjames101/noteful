import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = (props) => {

    return ( 
        <li><Link to={`/note/${props.id}`}><h2>{props.name}</h2></Link>
        <span>Date Modified on {props.modified}</span>
        <button>Delete Note</button>
        </li>
     );
}
 
export default NoteItem;