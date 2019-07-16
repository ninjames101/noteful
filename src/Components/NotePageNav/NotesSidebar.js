import React from 'react'
import PropTypes from 'prop-types'
import './NotesSidebar.css'
import { NotefulContext } from '../NotefulContext'

const NotesSidebar = (props) => {
  console.log(props)
  return (
    <NotefulContext.Consumer>
      {({ folders }) => (
        <div>
          <div className='noteNavBtnWrapper'>
            <button className='noteNavBtn' onClick={props.history.goBack}>Go Back</button>
          </div>
          <h3 className='activeNoteFolder'>{folders.name}</h3>
        </div>
      )}
    </NotefulContext.Consumer>
  )
}
NotesSidebar.propTypes = {
  goBack: PropTypes.func.isRequired,
  folder: PropTypes.string.isRequired
}

export default NotesSidebar
