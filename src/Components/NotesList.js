import React from 'react'
import NoteItem from './NoteItem'

const NotesList = (props) => {
    return ( 
        <section>
          <ul>
            <NoteItem />
          </ul>
          <button>Add Note</button>
        </section>
     );
}
 
export default NotesList;