import React from 'react';

class AddNote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            content: '',
            folderId: ''
        }
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
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
              }
        }).then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
    }

    
    generateFolderOptions = () => {
        return this.props.folders.map(folder => (<option key={folder.id} value={folder.id}>{folder.name}</option>))
    }
    

    render() {
    return ( 
        <form onSubmit={e => this.createNote(e)}>
            <label htmlFor='newNoteName'>New Note Name</label>
            <input type='text' id='newNoteName' value={this.state.name} name='name' onChange={event => this.updateNote(event)}  required/>
            <label htmlFor='newNoteContent'>Content</label>
            <textarea id='newNoteContent' name='content' value={this.state.content}  onChange={event => this.updateNote(event)}  ></textarea>
            <label htmlFor='newNoteFolder'>Folder</label>
            <select id="newNoteFolder" name="folderId" value={this.state.folderId} onChange={event => this.updateNote(event)} >
                {this.generateFolderOptions()}
            </select>
            <button>Create Note</button>
        </form>

     );
    }
}
 
export default AddNote;