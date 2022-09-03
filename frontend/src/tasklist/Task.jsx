import React from 'react';

const Task = ({
    content, 
    createdAt
}) => {
    return(
        <div>
            <h1>{createdAt}</h1>
            <h1>{content}</h1>
        </div>
    );

};

export default Task;