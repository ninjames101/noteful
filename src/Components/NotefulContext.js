import React from 'react'

export const NotefulContext = React.createContext({
  deleteNote: () => {},
  updateFolder: () => {},
  createFolder: () => {},
  newFolderName: '',
  newNoteName: '',
  newNoteContent: '',
  newNoteFolderId: '',
  updateNote: () => {},
  createNote: () => {},
  folders: [],
  notes: [],
  butts: void 0,
  listNotes: () => {}
})
