import React from 'react';

const FolderItem = (props) => {
    return ( 
        <li id={props.id}>
            <a href={'/folder/' + props.id}>{props.name}</a>
        </li>
     );
}
 
export default FolderItem;