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
import Store from './Store'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: Store
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    const data = {}

    fetch('http://localhost:9090/folders')
    .then(response => response.json())
    .then(responseJson => {data.folders = responseJson
    
      fetch('http://localhost:9090/notes')
      .then(response => response.json())
      .then(responseJson => {
        data.notes = responseJson
        this.setState({store: data})
      })
    })
    
  }
  
  findNote = (noteId) => {
    return this.state.store.notes.find(note => note.id === noteId);
  }

  findNoteFolder = (noteId) => {
      const folderId = this.findNote(noteId).folderId;
      return this.state.store.folders.find(folder => folder.id === folderId);
  }

  findFolderNotes = (folderID) => {
    return this.state.store.notes.filter(note => note.folderId === folderID);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={() => <FolderListPrimary folders={this.state.store.folders} />} />
            <Route path="/addfolder" render={() => <FolderListPrimary folders={this.state.store.folders} />} />
            <Route path="/folder/:folderid" render={() => <FolderListPrimary folders={this.state.store.folders} />} />
            <Route path="/note/:noteid" render={(routerProps) => <NotesSidebar folder={this.findNoteFolder(routerProps.match.params.noteid).name} goBack={() => routerProps.history.goBack()}   />} />
          </Switch>
          <Switch>
              <Route exact path="/" render={() => <NotesList notes={this.state.store.notes} />} />
              <Route path="/addnote" render={() => <AddNote folders={this.state.store.folders} /> } />
              <Route path="/addfolder" render={() => <AddFolder /> } />
              <Route path="/folder/:folderid" render={(routerProps) => <NotesList notes={this.findFolderNotes(routerProps.match.params.folderid)}  />} />
              <Route path="/note/:noteid" render={(routerProps) => <SingleNote note={this.findNote(routerProps.match.params.noteid)}   />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
