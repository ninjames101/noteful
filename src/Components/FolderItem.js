import React from 'react';
import { Link } from 'react-router-dom';

const FolderItem = (props) => {
    return ( 
        <li id={props.id}>
            <Link to={`/folder/${props.id}`}>{props.name}</Link>
        </li>
     );
}
 
export default FolderItem;