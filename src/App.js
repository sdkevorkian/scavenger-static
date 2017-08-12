import React, { Component } from 'react';
import Task from './Task';
import './index.css';
import taskList from './taskList.js';

class App extends Component {
  render() {
    console.log(taskList);
    return (
      <div className="container">
        <div className="header">
          <h1>Morgan's Bachlorette Scavenger Hunt!</h1>
          <p>Take a photo for each task. Morgan will choose the winning team for each task. Bonus points apply to whomever!</p>
          <h3>Team: <span className="underline"> </span></h3>
        </div>
        <div className="task-list">
            <Task first={true}/>
          {taskList.map(function(task){
            return <Task task={task}/>
          })}
        </div>
        <div className="score">
          <h3>Final Score: <span className="underline"> </span></h3>
        </div>
      </div>
    );
  }
}

export default App;
