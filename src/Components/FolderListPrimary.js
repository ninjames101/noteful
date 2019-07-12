import React from 'react';
import FolderItem from './FolderItem';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const FolderListPrimary = (props) => {
  
    const folder = props.folders.map((folder) => (
      <FolderItem key={folder.id} id={folder.id} name={folder.name} />
    ))
    return ( 
        <nav>
          <ul>
            {folder}
          </ul>
          <button><Link to="/addfolder">Add folder</Link></button>
        </nav>
     );
}

FolderListPrimary.defaultProps = {
  folders: []
}

FolderListPrimary.propTypes = {
  folders : PropTypes.array.isRequired,
}
 
export default FolderListPrimary;