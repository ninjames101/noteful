import React from 'react';

class AddFolder extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            folderName: '' 
        }
    }

    updateFolder = (value) => {
        this.setState({
            folderName: value
        })
    }

    createFolder = (event) => {
        event.preventDefault()
        fetch('http://localhost:9090/folders/',{
            method: 'POST',
            body: JSON.stringify({name: this.state.folderName}),
            headers: {
                'Content-Type': 'application/json',
              }
        }).then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
    }

    render() {
    return ( 
        <form onSubmit={e => this.createFolder(e)}>
            <label htmlFor='newFolderName'>New Folder Name</label>
            <input type='text' id='newFolderName' value={this.state.folderName} onChange={e => this.updateFolder(e.target.value)}  required/>
            <button>Create Folder</button>
        </form>

     );
    }
}
 
export default AddFolder;