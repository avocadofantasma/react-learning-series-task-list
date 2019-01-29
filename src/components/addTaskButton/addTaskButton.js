import React, { Component } from 'react';
import './addTaskButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const addTaskButton = ({handleClick}) => {
    return (
        <button className="add-task btn btn-success" onClick={handleClick}>
                <FontAwesomeIcon icon={faPlus}/>
        </button>
    );
};

export default addTaskButton;
