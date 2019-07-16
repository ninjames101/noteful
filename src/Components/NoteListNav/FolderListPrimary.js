import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NotefulContext } from '../NotefulContext'
import './FolderListPrimary.css'
import './FolderItem.css'

const FolderListPrimary = (props) =>

  (
    <NotefulContext.Consumer>
      {({ folders }) => (
        <React.Fragment>
          <ul className='folderNavList'>
            {folders.map(folder => <li key={folder.id} className='folderItem' id={folder.id}>
              <NavLink to={`/folder/${folder.id}`}>{folder.name}</NavLink>
            </li>)}
          </ul>
          <div className='navBtnWrapper'>
            <button><Link to='/addfolder'>Add folder</Link></button>
          </div>
        </React.Fragment>
      )}
    </NotefulContext.Consumer>

  )

export default FolderListPrimary
