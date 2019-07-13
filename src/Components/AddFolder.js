import React from 'react';
import { NotefulContext } from './NotefulContext'
import './AddFolder.css'

const AddFolder = (props) => {
    
    return ( 
        <NotefulContext.Consumer>
            {({updateFolder, createFolder, newFolderName}) => (
                <form onSubmit={e => createFolder(e)} className='addFolderForm'>
                    <label htmlFor='newFolderName'>New Folder Name</label>
                    <input type='text' id='newFolderName' value={newFolderName} onChange={e => updateFolder(e.target.value)}  required/>
                    <button>Create Folder</button>
                </form>
            )}
        </NotefulContext.Consumer>
     );
}
 
export default AddFolder;