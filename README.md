This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Components
Main App - Set state in here.
Header - Same accross. App title link to main route " / "
Main Section
    NotesList - Main and Folder Route
    SingleNote - Note Route
Note component
Sidebar - prop of selected. if ID in selected prop matches, add a class to that folder
    FolderListPrimary - Main and Folder Route
    NotesSidebar - Note Route

State
In a Json and contains array of folders and array of notes

Routes

Main - " / "
    -  Show all available notes in main section
    - Note - Show name and modified date
    - Sidebar: List of folders with none selected

Dynamic Folder - " /folder/:folder-id "
    folder-id matches id of one of the folders in state
    Main section, only show notes in selected folder
    Sidebar - All folders with selected folder highlighted. 

Dynamic Note - " /note/:note-id "
    Main section show display currently selected note name, modified date AND CONTENT.
    Sidebar - Just show folder of currently selected note and a 'Back' button.


Dummy data

Use this dummy-store.js as a file in your project to populate the initial state.


Hints

Hints for the App component:

In order to pass props into components for specific routes, you'll need to use the render prop on Route components in a similar way to when we added programmatic navigation to the bookmarks app. For example:
<Route
  path='/foo'
  render={(routerProps) =>
    <FooSidebar
      aFoo={this.state.foos.find(foo => foo.id === routeProps.match.params.foodId)}
    />
  }
/>
The folder route:

Instead of using Link components in the sidebar for each folder, you can use the NavLink component that will automatically add a className of "active" when appropriate.
You'll need to filter for the notes that contain a matching folderId to the folder that's selected when deciding which notes to display.



Component

AddFolder
Name of Folder
Submitfolder name to POST /folder endpoint
Handle errors
Button to nav to invoke component

AddNote
Name of Note, Content, Folder for Note (List of existing folders) The folder should be selected from a list of existing folders.
Submit to POST /notes endpoint
Data Val: Note name not blank.
Handle Errors
Note List Page: Add button for invoke component