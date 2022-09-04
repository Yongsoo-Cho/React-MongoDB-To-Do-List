import React, { useState } from 'react';
import { deleteTask, resolveTask } from './task-operations';
import {CSSTransition} from 'react-transition-group';
import './task.css'

const Task = ({
    id,
    content, 
    createdAt,
    status,
}) => {
    let style = {};
    let resolveText = "Resolve";

    if(status==='Resolved'){
        style = {backgroundColor: "lightgreen"};
        resolveText = "Open";
    }

    const [toGreen, setToGreen] = useState(false);

    return(
        <CSSTransition 
            in={toGreen}
            timeout={500}
            classNames="taskContainer"
        >
            <div className = 'task_entry' style={style}>
                <h1>{content}</h1>
                <div className = 'bottom-container'>
                    <button onClick={ () => {
                        deleteTask( id )
                    }}>
                        Delete
                    </button>

                    <button onClick={ () => {
                        resolveTask( id );
                        setToGreen(!toGreen);
                    }}>
                        {resolveText}
                    </button>

                    <h3>{new Date(createdAt).toLocaleString()}</h3>
                </div>
            </div>
        </CSSTransition>
    );

};

export default Task;