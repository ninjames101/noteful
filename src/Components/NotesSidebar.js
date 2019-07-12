import React from 'react'
import PropTypes from 'prop-types';

const NotesSidebar = (props) => {
    return ( 
        <nav>
            <button onClick={props.goBack}>Go Back</button>
            <h3>{props.folder}</h3>
        </nav>
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