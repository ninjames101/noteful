import React, { Component } from 'react';

class NotefulErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null }
    }
    render() {
        return (
            <main className='errorDisplay'>
                <h1>Oooops!!! Something went wrong...</h1>
                <p>Damn gerbils have stopped running again! Someone has been dispatched to poke them with a sharp stick.</p>
            </main>
        );
    }
}

export default NotefulErrorPage;