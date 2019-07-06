import React from 'react'

const NotesSidebar = (props) => {
    return ( 
        <nav>
            <button>Go Back</button>
            <h3>{props.folder}</h3>
        </nav>
     );
}
 
export default NotesSidebar;