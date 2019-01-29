import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TasksView from './components/tasksView/tasksView.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TasksView />
      </div>
    );
  }
}

export default App;
