import React from 'react'
import PropTypes from 'prop-types';
import './NotesSidebar.css'

const NotesSidebar = (props) => {
    return ( 
        <React.Fragment>
            <button onClick={props.goBack}>Go Back</button>
            <h3 className="activeNoteFolder">{props.folder}</h3>
        </React.Fragment>
     );
}

NotesSidebar.defaultProps = {
    goBack : () => {}
}

NotesSidebar.propTypes = {
    goBack : PropTypes.func.isRequired,
    folder : PropTypes.string.isRequired
}
 
export default NotesSidebar;