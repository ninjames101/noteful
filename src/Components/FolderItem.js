import React from 'react';
import { NavLink } from 'react-router-dom';
import './FolderItem.css'
import PropTypes from 'prop-types';

const FolderItem = (props) => {
    
    return ( 
        <li id={props.id}>
            <NavLink to={`/folder/${props.id}`}>{props.name}</NavLink>
        </li>
     );
}

FolderItem.propTypes = {
    id : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
 
export default FolderItem;