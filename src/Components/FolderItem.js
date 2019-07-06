import React from 'react';
import { NavLink } from 'react-router-dom';
import './FolderItem.css'

const FolderItem = (props) => {
    
    return ( 
        <li id={props.id}>
            <NavLink to={`/folder/${props.id}`}>{props.name}</NavLink>
        </li>
     );
}
 
export default FolderItem;