import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import { Route, Switch } from 'react-router-dom';
import FolderListPrimary from './Components/FolderListPrimary';
import NotesSidebar from './Components/NotesSidebar';
import NotesList from './Components/NotesList';
import SingleNote from './Components/SingleNote';
import AddFolder from './Components/AddFolder';
import AddNote from './Components/AddNote';
import { NotefulContext} from './Components/NotefulContext'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: [],
      notes: [],
      deleteNote: (noteID) => this.deleteNote(noteID),
      updateFolder: (folderName) => this.updateFolder(folderName),
      createFolder: (event) => this.createFolder(event),
      newFolderName: '',
      newNoteName: '',
      newNoteContent: '',
      newNoteFolderId: '',
      updateNote: (event) => this.updateNote(event),
      createNote: (event) => this.createNote(event),
    }
  }

  deleteNote = (noteID) => {
    fetch(`http://localhost:9090/notes/${noteID}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(responseJson => this.fetchNotes())
    .catch(error => console.log(error.message))
  }

  componentDidMount() {
    this.fetchFolders();
    this.fetchNotes();
  }

  fetchFolders = () => {
    fetch('http://localhost:9090/folders')
    .then(response => response.json())
    .then(responseJson => this.setState({
        folders: responseJson
    }) )
    .catch(error => console.log(error.message))
  }
  
  fetchNotes = () => {
    fetch('http://localhost:9090/notes')
    .then(response => response.json())
    .then(responseJson => this.setState({
        notes: responseJson
      }))
    .catch(error => console.log(error.message))
  }

  createFolder = (event) => {
    event.preventDefault()
    fetch('http://localhost:9090/folders/',{
        method: 'POST',
        body: JSON.stringify({name: this.state.newFolderName}),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
    .then(response => {
      this.fetchFolders()
      this.setState({newFolderName: ''})
    })
    .catch(error => console.log(error.message))
  }

  updateFolder = (folderName) => {
    this.setState({
        newFolderName: folderName
    })
}

  updateNote = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
    [name]: value
    });
  }

  createNote = (event) => {
    event.preventDefault()
    fetch('http://localhost:9090/notes/',{
        method: 'POST',
        body: JSON.stringify({
          name: this.state.newNoteName,
          content: this.state.newNoteContent,
          folderId: this.state.newNoteFolderId
        }),
        headers: {
            'Content-Type': 'application/json',
          }
    }).then(response => response.json())
    .then(response => {this.fetchNotes()
    this.setState({
      newNoteName: '',
      newNoteContent: '',
      newNoteFolderId: ''
    })})
    .catch(error => console.log(error.message))
}

  findNote = (noteId) => {
    return this.state.notes.find(note => note.id === noteId);
  }

  findNoteFolder = (noteId) => {
      const folderId = this.findNote(noteId).folderId;
      return this.state.folders.find(folder => folder.id === folderId);
  }

  findFolderNotes = (folderID) => {
    return this.state.notes.filter(note => note.folderId === folderID);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <NotefulContext.Provider
                value={this.state}>
            <Switch>
              <Route exact path="/" render={() => <FolderListPrimary folders={this.state.folders} />} />
              <Route path="/addfolder" render={() => <FolderListPrimary folders={this.state.folders} />} />
              <Route path="/folder/:folderid" render={() => <FolderListPrimary folders={this.state.folders} />} />
              <Route path="/note/:noteid" render={(routerProps) => <NotesSidebar folder={this.findNoteFolder(routerProps.match.params.noteid).name} goBack={() => routerProps.history.goBack()}   />} />
            </Switch>
            <Switch>
                <Route exact path="/" render={() => <NotesList notes={this.state.notes} />} />
                <Route path="/addnote" render={() => <AddNote  /> } />
                <Route path="/addfolder" render={() => <AddFolder /> } />
                <Route path="/folder/:folderid" render={(routerProps) => <NotesList notes={this.findFolderNotes(routerProps.match.params.folderid)}  />} />
                <Route path="/note/:noteid" render={(routerProps) => <SingleNote note={this.findNote(routerProps.match.params.noteid)}   />} />
            </Switch>
          </NotefulContext.Provider>
        </main>
      </div>
    );
  }
}

App.defaultProps = {
  store: {
    folders: [{}],
    notes: [{}]
  }
}

export default App;
