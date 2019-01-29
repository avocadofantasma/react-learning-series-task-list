import React from 'react';
import './clearButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

const clearButton = ({deleteAll}) => {
    return (
        <button className="clear-btn btn btn-primary btn-danger" onClick={deleteAll}>
            <FontAwesomeIcon icon={faUndo}/>
        </button>
    );
};

export default clearButton;
