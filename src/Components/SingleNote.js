import React from 'react'
import NoteItem from './NoteItem'

const SingleNote = (props) => {
    return ( 
        <section>
          <ul>
            <NoteItem />
          </ul>
          <p>Note text stuff goes here blah blah bluh</p>
        </section>
     );
}
 
export default SingleNote;