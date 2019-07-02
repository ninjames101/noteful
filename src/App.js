import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import { Route, Switch } from 'react-router-dom'
import FolderListPrimary from './Components/FolderListPrimary';
import NotesSidebar from './Components/NotesSidebar';
import NotesList from './Components/NotesList';
import SingleNote from './Components/SingleNote';
import Store from './Store'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: Store
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/jameseatingpizza" component={Header} />
        <main>
          <Switch>
          <Route exact path="/" render={() => <FolderListPrimary folders={this.state.store.folders} />} />
          <Route path="/folder/:id" render={() => <FolderListPrimary folders={this.state.store.folders}  />} />
          <NotesSidebar />
          </Switch>
          <NotesList />
          <SingleNote />
        </main>
      </div>
    );
  }
}

export default App;
