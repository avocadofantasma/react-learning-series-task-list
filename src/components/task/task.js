import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import './task.css';

const task = ({task, removeTask, completeTask}) => {
        return (
            <li className={`task priority-${task.priority} list-group-item`} key={task.key}>
                <input type="checkbox" className="done-btn" onChange={e => completeTask(e, task)} />
                <div className="task-col">{task.name + task.index}</div>
                <div className="task-col">{task.priority}</div>
                <FontAwesomeIcon className="text-danger" icon={faMinusCircle} onClick={e => removeTask(task.index)}/>
            </li>
        );
    }

export default task;
/* 
class task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task,
            done: this.props.task.done
        };
    }
    handleDoneBtn(e) {
        if (this.state.done) {
            this.setState({done: false});
            this.props.task.done = false;
            e.target.parentElement.classList.remove('done');
        } else {
            this.setState({done: true});
            this.props.task.done = true;
            e.target.parentElement.classList.add('done');
        }
    }

    render() {
        return (
            <li className={`task priority-${this.state.task.priority} list-group-item ${this.isDone()}`} key={this.state.task.key}>
                <input type="checkbox" className="done-btn" onChange={e => this.handleDoneBtn(e)} />
                <div className="task-col">{this.state.task.name + this.state.task.index}</div>
                <div className="task-col">{this.state.task.priority}</div>
                <FontAwesomeIcon className="text-danger" icon={faMinusCircle} onClick={e => {
                    debugger;
                    this.props.removeTask(this.props.task.index)
                    }
                }/>
            </li>
        );
    }
}

export default task;
 */