import React from 'react';
import Task from '../task/task.js';

const taskList = ({tasks, removeTask, completeTask}) => {
    return (
        <ul className="task-list list-group">
            {
                tasks.map(task => <Task task={task} removeTask={removeTask} completeTask={completeTask}/>)
            }
        </ul>
    );
};

export default taskList;
