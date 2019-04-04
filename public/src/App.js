import React, { Component } from 'react';
import './App.css';
import FileTree from './components/filetree'
import Editor from './components/editor'

class App extends Component {
  render() {
    return (
      <div id="editor">
        <div id="left"><FileTree /></div>
        <div id="right"><Editor /></div>
      </div>
    );
  }
}

export default App;
