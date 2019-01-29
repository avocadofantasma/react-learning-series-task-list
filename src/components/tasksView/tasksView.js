import React, { Component } from 'react';
import TaskList from '../taskList/taskList.js';
import TaskButton from '../addTaskButton/addTaskButton.js';
import ClearButton from '../clearButton/clearButton.js';
import random from '../helpers/randomNumber.js';
const min = 0,
    max = 5;

class Task {
    static getIndex() {
        return this.index;
    }
    static setIndex() {
        this.index++;
    }

    constructor(name, index) {
        this.name = name;
        this.priority = random(min, max);
        this.index = index++;
        this.done = false;
    }
}

Task.prototype.index = 0;

class tasksView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: [
                new Task('Barrer', 1),
                new Task('comer', 2),
                new Task('dormir', 3)
            ],
            index: 4
        };
    }
    addTask() {
        this.setState(
            {
                taskList: [...this.state.taskList, new Task(`Tarea`, this.state.index)],
                index: this.state.index + 1
            }
        );
    }
    removeTask(elToRemove) {
        this.setState(
            {
                taskList: [...this.state.taskList.filter(e => e.index !== elToRemove)]
            }
        );
    }
    clearTasks() {
        this.setState({taskList: []});
    }
    completeTask(event, task) {
        let taskList = [...this.state.taskList],
            modifiedTask = taskList.find(taskDone => taskDone.index === task.index);
        if (modifiedTask.done) {
            modifiedTask.done = false;
            event.currentTarget.parentElement.classList.remove('done');
        } else {
            modifiedTask.done = true;
            event.currentTarget.parentElement.classList.add('done');
        }
        this.setState({taskList});
    }

    render() {
        return (
            <div className="task-view container-fluid bg-light">
                <div className="task-tile">
                    <h3>
                        My task's list
                    </h3>
                </div>
                <TaskList tasks={this.state.taskList} completeTask={(e, task) => this.completeTask(e, task)} removeTask={e => this.removeTask(e)}/>
                <TaskButton handleClick={() => this.addTask()}/>
                <ClearButton deleteAll={() => this.clearTasks()}/>
            </div>
        );
    }
}

export default tasksView;