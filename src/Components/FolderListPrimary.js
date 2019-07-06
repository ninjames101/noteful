import React from 'react';
import FolderItem from './FolderItem';

const FolderListPrimary = (props) => {
  
    const folder = props.folders.map((folder) => (
      <FolderItem key={folder.id} id={folder.id} name={folder.name} />
    ))
    return ( 
        <nav>
          <ul>
            {folder}
          </ul>
          <button>Add folder</button>
        </nav>
     );
}
 
export default FolderListPrimary;